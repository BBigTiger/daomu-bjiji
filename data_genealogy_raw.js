// 世家人物谱系数据（参考 DA-7 考据 + daomu-map 谱系概念）
// 每条：from(长辈) -> to(后代/相关)，relation 关系，note 跨作品联系
// 供地图"九门谱系视图"使用
export const genealogy = [
  { id: "g01", from: "张启山", to: "张起灵", relation: "同出张家血脉", note: "具体辈分不明（存疑）", era: "jiemen" },
  { id: "g02", from: "吴老狗", to: "吴一穷", relation: "父子", note: "吴一穷为吴邪之父（正传）", era: "jiemen" },
  { id: "g03", from: "吴老狗", to: "吴三省", relation: "父子（三子）", note: "正传「三叔」；与解连环身份互换之局源头（卷八，存疑）", era: "jiemen" },
  { id: "g04", from: "吴老狗", to: "吴邪", relation: "祖孙（经吴一穷）", note: "正传主角", era: "jiemen" },
  { id: "g05", from: "霍仙姑", to: "霍秀秀", relation: "祖孙", note: "正传（吴邪同代人，霍家继任当家）", era: "jiemen" },
  { id: "g06", from: "解九爷", to: "解连环", relation: "后代（父子或叔侄，存疑）", note: "正传（与吴三省互换身份者）", era: "jiemen" },
  { id: "g07", from: "解九爷", to: "解雨臣", relation: "祖孙（经解连环一支，存疑）", note: "正传/《重启》（花爷）", era: "jiemen" },
  { id: "g08", from: "二月红", to: "陈皮阿四", relation: "师徒", note: "正传卷四《云顶天宫》以九旬老者再登场", era: "jiemen" },
  { id: "g09", from: "齐铁嘴", to: "齐羽", relation: "名字关联，关系不明（存疑）", note: "正传卷八提及齐羽之名", era: "jiemen" },
  { id: "g10", from: "张启山", to: "张小鱼", relation: "主从（救赎之恩）", note: "张小鱼被张启山救下赐名，随其南下长沙任副官（《九门》剧版，存疑）", era: "jiemen" }
];