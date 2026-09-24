// 数据校验脚本（参考 daomu-map 的 lint_data.js）
// 用法：node lint_data.mjs
// 校验：JSON可解析 / 词表 / 引用完整性 / 坐标范围 / 谜题线 / 轨迹引用 / 时间线谜题关联
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const readJson = (p) => JSON.parse(fs.readFileSync(path.join(__dirname, p), 'utf8'));
const importJs = async (p) => (await import(pathToFileURL(path.join(__dirname, p)).href));

const errors = [];
const warns = [];
const err = (m) => errors.push(m);
const warn = (m) => warns.push(m);

// ---- 读取全部数据 ----
const timeline = (await importJs('timeline_entries.js')).timeline;
const locations = readJson('data_locations_raw.json');
const people = readJson('data_people_raw.json');
const finds = readJson('data_finds_raw.json');
const route = (await importJs('data_route_raw.js')).route;
const mysteries = (await importJs('data_mysteries_raw.js')).mysteries;
const trajectories = (await importJs('data_trajectories_raw.js')).trajectories;

const locIds = new Set(locations.map(l => l.id));
const tlIds = new Set(timeline.map(t => t.id));
const peopleIds = new Set(people.map(p => p.id));

// ---- 1. 地点坐标范围（中国境内）----
locations.forEach(l => {
  if (typeof l.lat !== 'number' || typeof l.lng !== 'number') err(`地点 ${l.id} 缺坐标`);
  if (l.lat < 3 || l.lat > 54) err(`地点 ${l.id}(${l.name}) 纬度越界 ${l.lat}`);
  if (l.lng < 73 || l.lng > 135) err(`地点 ${l.id}(${l.name}) 经度越界 ${l.lng}`);
  // 虚构地点必须标注
  if ((l.name.includes('（内部）') || l.name.includes('遗址') || l.name.includes('墓')) && !l.coords_note) {
    warn(`地点 ${l.id}(${l.name}) 疑似虚构但无 coords_note`);
  }
});

// ---- 2. 地点引用完整性：timeline.location 应能匹配 ----
timeline.forEach(t => {
  (t.location || []).forEach(ls => {
    const hit = locations.some(l => l.name.includes(ls) || ls.includes(l.name));
    if (!hit) warn(`时间线 ${t.id} 地点「${ls}」未匹配到任何地点`);
  });
  // 谜题线关联
  if (t.finds && t.finds.length) {
    t.finds.forEach(f => {
      if (!finds.some(x => x.name === f)) warn(`时间线 ${t.id} 发现物「${f}」未在发现物表中`);
    });
  }
});

// ---- 3. 人物引用完整性 ----
timeline.forEach(t => {
  (t.people || []).forEach(p => {
    const hit = people.some(x => x.name === p || (x.alias || []).includes(p));
    if (!hit) warn(`时间线 ${t.id} 人物「${p}」未在人物表中`);
  });
});
locations.forEach(l => {
  (l.characters_seen || []).forEach(p => {
    const hit = people.some(x => x.name === p || (x.alias || []).includes(p));
    if (!hit) warn(`地点 ${l.id} 人物「${p}」未在人物表中`);
  });
});

// ---- 4. 谜题线校验 ----
const myIds = new Set(mysteries.map(m => m.id));
mysteries.forEach(m => {
  if (!['open','partial','answered'].includes(m.status)) err(`谜题 ${m.id} 状态非法: ${m.status}`);
  if (!m.color || !/^#[0-9a-fA-F]{6}$/.test(m.color)) warn(`谜题 ${m.id} 颜色格式异常: ${m.color}`);
  (m.timeline_ids || []).forEach(tid => {
    if (!tlIds.has(tid)) err(`谜题 ${m.id} 引用不存在的时间线 ${tid}`);
  });
});

// ---- 5. 轨迹校验 ----
Object.keys(trajectories).forEach(k => {
  const t = trajectories[k];
  if (!t.name || !t.color) err(`轨迹 ${k} 缺 name/color`);
  t.stops.forEach(s => {
    if (!locIds.has(s.id)) err(`轨迹 ${k} 引用不存在的地点 ${s.id}`);
  });
});

// ---- 6. 人物表唯一性 ----
const allNames = new Map(); // name -> person id（name 与 alias 去重，alias===自身 跳过）
people.forEach(p => {
  const names = new Set([p.name, ...(p.alias || []).filter(a => a !== p.name)]);
  names.forEach(n => {
    if (allNames.has(n)) err(`人物名/别名重复: ${n} 出现在 ${allNames.get(n)} 与 ${p.id}`);
    else allNames.set(n, p.id);
  });
});

// ---- 7. 版权检查：引号片段 > 20 字警告 ----
[timeline, locations, people, finds].forEach(arr => {
  arr.forEach(ent => {
    Object.keys(ent).forEach(k => {
      const v = ent[k];
      if (typeof v === 'string') {
        const m = v.match(/["“”]([^"“”]{20,})["“”]/);
        if (m) warn(`${ent.id||ent.name} 字段 ${k} 含长引号片段（${m[1].length}字），疑似引用原文`);
      }
    });
  });
});

// ---- 输出 ----
console.log('═'.repeat(50));
console.log(`数据总量：地点 ${locations.length} · 时间线 ${timeline.length} · 人物 ${people.length} · 发现物 ${finds.length} · 路线 ${route.length} · 谜题线 ${mysteries.length} · 轨迹 ${Object.keys(trajectories).length}`);
console.log('═'.repeat(50));
if (warns.length) {
  console.log(`\n⚠️ 警告 ${warns.length} 条：`);
  warns.forEach(w => console.log('  ⚠ ' + w));
} else console.log('\n✅ 无警告');
if (errors.length) {
  console.log(`\n❌ 错误 ${errors.length} 条：`);
  errors.forEach(e => console.log('  ✗ ' + e));
  process.exit(1);
} else {
  console.log('✅ 校验全部通过');
  process.exit(0);
}
