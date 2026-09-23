// 数据整合脚本（生成 JSON / GeoJSON / 地图数据）
// 用法：node build_data.mjs  （会在 daomu\ 下生成 locations.json / timeline.json / characters.json / finds.json / locations.geojson / map\data.js）
// 说明：原始考据为各子代理产出的 Markdown 表格 + 原始数据文件，本脚本负责合并输出。

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const readJson = (p) => JSON.parse(fs.readFileSync(path.join(__dirname, p), 'utf8'));
const importJs = async (p) => (await import(pathToFileURL(path.join(__dirname, p)).href));

// ---- 时间线（由各卷考据汇总）----
const timeline = fs.existsSync(path.join(__dirname, 'timeline_entries.js'))
  ? (await importJs('timeline_entries.js')).timeline
  : [];

// ---- 地点 ----
const locations = readJson('data_locations_raw.json');

// ---- 人物 ----
const people = fs.existsSync(path.join(__dirname, 'data_people_raw.json'))
  ? readJson('data_people_raw.json')
  : [];

// ---- 发现物 ----
const finds = fs.existsSync(path.join(__dirname, 'data_finds_raw.json'))
  ? readJson('data_finds_raw.json')
  : [];

// ---- 路线 ----
const route = fs.existsSync(path.join(__dirname, 'data_route_raw.js'))
  ? (await importJs('data_route_raw.js')).route
  : [];

// ---- 输出 ----
const out = {
  note: '《盗墓笔记》编年史数据 · 由 DeepSeek 多子代理考据整理，坐标含虚构锚点标注；非官方文本',
  timeline, locations, people, finds, route,
};

const dataJs = `window.DAOMU_DATA = ${JSON.stringify(out)};`;
fs.mkdirSync(path.join(__dirname, 'map'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'map', 'data.js'), dataJs, 'utf8');

fs.writeFileSync(path.join(__dirname, 'locations.json'), JSON.stringify(locations, null, 2), 'utf8');
fs.writeFileSync(path.join(__dirname, 'timeline.json'), JSON.stringify(timeline, null, 2), 'utf8');
fs.writeFileSync(path.join(__dirname, 'characters.json'), JSON.stringify(people, null, 2), 'utf8');
fs.writeFileSync(path.join(__dirname, 'finds.json'), JSON.stringify(finds, null, 2), 'utf8');

// GeoJSON
const geojson = {
  type: 'FeatureCollection',
  features: locations.map(l => ({
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [l.lng, l.lat] },
    properties: { ...l }
  }))
};
fs.writeFileSync(path.join(__dirname, 'locations.geojson'), JSON.stringify(geojson, null, 2), 'utf8');

console.log('done: locations ' + locations.length + ', timeline ' + timeline.length + ', people ' + people.length + ', finds ' + finds.length + ', route ' + route.length);