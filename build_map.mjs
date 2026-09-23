// 组装最终地图：把 data.js 注入 template.html 的 __DAOMU_DATA__ 挂载点
// 用法：node build_map.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const template = fs.readFileSync(path.join(__dirname, 'map', 'template.html'), 'utf8');
const dataJsPath = path.join(__dirname, 'map', 'data.js');
if (!fs.existsSync(dataJsPath)) {
  console.error('data.js 不存在，先运行 node build_data.mjs');
  process.exit(1);
}
const dataJs = fs.readFileSync(dataJsPath, 'utf8');

// 取出 window.DAOMU_DATA = {...};
const m = dataJs.match(/window\.DAOMU_DATA\s*=\s*(\{[\s\S]*\});/);
if (!m) { console.error('data.js 格式异常'); process.exit(1); }
const dataLiteral = m[1];

if (!template.includes('__DAOMU_DATA__')) { console.error('模板缺少 __DAOMU_DATA__ 挂载点'); process.exit(1); }
const finalHtml = template.replace('__DAOMU_DATA__', dataLiteral);

const outPath = path.join(__dirname, 'map', '盗墓笔记地图.html');
fs.writeFileSync(outPath, finalHtml, 'utf8');
console.log('地图已生成：' + outPath);

// 兼容文件名（无中文，便于直接双击/浏览器打开）
const altPath = path.join(__dirname, 'map', 'daomu_map.html');
fs.writeFileSync(altPath, finalHtml, 'utf8');
console.log('备用文件名：' + altPath);