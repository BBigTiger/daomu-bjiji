// 谜题线数据（参考 daomu-map 的 mysteries.js 设计）
// status: open(未解) | partial(部分解答) | answered(已解答)
// timeline_ids 依据 timeline_entries.js 实际编号（2026 核对）
export const mysteries = [
  {
    id: "ms01",
    title: "青铜门后的终极",
    question: "青铜门后到底是什么？张家世代守护的终极秘密是什么？",
    status: "open",
    color: "#c9a227",
    timeline_ids: ["t33","t34","t35","t67","t68"],
    note: "全书最大悬念，正传至大结局只露出门缝与巨影"
  },
  {
    id: "ms02",
    title: "张起灵的身份与失忆",
    question: "闷油瓶到底是谁？他为何周期性失去记忆？",
    status: "partial",
    color: "#6e7d8c",
    timeline_ids: ["t03","t17","t71","t75","t77","t81","t82","t36","t37","t39","t42"],
    note: "张家身世、天授血脉、失忆之谜跨全书"
  },
  {
    id: "ms03",
    title: "吴三省/解连环身份之谜",
    question: "三叔到底是吴三省还是解连环？两人如何互换身份？",
    status: "partial",
    color: "#b0552e",
    timeline_ids: ["t14","t16","t66","t76"],
    note: "正传后段揭示，细节仍有含糊处"
  },
  {
    id: "ms04",
    title: "汪家百年布局",
    question: "汪家自汪藏海传承而来的秘密组织，究竟想要什么？",
    status: "partial",
    color: "#4a6a8c",
    timeline_ids: ["t10","t67","t43","t44","t45","t46","t48","t49"],
    note: "沙海揭示汪家渗透各势力，终极诉求与长生关联"
  },
  {
    id: "ms05",
    title: "战国帛书之谜",
    question: "这批帛书上记载了什么？它指向的地图与古墓是什么关系？",
    status: "partial",
    color: "#8f7a4a",
    timeline_ids: ["t01","t02","t09"],
    note: "全书故事线起点，先后牵出多条线索"
  },
  {
    id: "ms06",
    title: "长生与玉俑",
    question: "玉俑真能让肉身千年不腐？长生术的真相是什么？",
    status: "partial",
    color: "#c9a227",
    timeline_ids: ["t06","t07","t08","t13","t74"],
    note: "全书总谜题，正传至大结局未完全收束"
  },
  {
    id: "ms07",
    title: "十年之约",
    question: "青铜门前的约定能否兑现？十年后门会不会再开？",
    status: "partial",
    color: "#c9a227",
    timeline_ids: ["t33","t34","t35","t68"],
    note: "约定在正传终章成立，兑现见重启"
  },
  {
    id: "ms08",
    title: "西沙考古队失踪之谜",
    question: "进入海底墓的考古队为何几乎全军覆没？",
    status: "partial",
    color: "#7a6f58",
    timeline_ids: ["t14","t69","t70"],
    note: "正传陆续揭示，成员下落各卷分别交代"
  },
  {
    id: "ms09",
    title: "海底墓与汪藏海遗迹",
    question: "汪藏海为何把墓藏进海底？他在里面留下了什么？",
    status: "partial",
    color: "#4a6a8c",
    timeline_ids: ["t10","t12","t13","t14","t15"],
    note: "汪藏海遗迹链第一环，线索指向云顶天宫"
  },
  {
    id: "ms10",
    title: "蛇眉铜鱼的秘密",
    question: "铜鱼为什么要做数枚、藏在不同地方？",
    status: "partial",
    color: "#6f8f7a",
    timeline_ids: ["t06","t09"],
    note: "多枚铜鱼先后出于不同地点，合指云顶天宫"
  },
  {
    id: "ms11",
    title: "东夏王朝与万奴王",
    question: "万奴王究竟是什么？东夏与长生有何牵连？",
    status: "partial",
    color: "#5d6e7d",
    timeline_ids: ["t31","t32"],
    note: "东夏为金末元初真实政权，小说虚构延伸"
  },
  {
    id: "ms12",
    title: "西王母国之谜",
    question: "塔木陀古城与西王母国是什么关系？长生术源头是否在此？",
    status: "partial",
    color: "#7d5a6e",
    timeline_ids: ["t70","t72","t73","t74","t75"],
    note: "古籍西王母传说为小说提供原型"
  },
  {
    id: "ms13",
    title: "张家古楼之谜",
    question: "张家古楼到底是什么？张家为何把祖楼藏进深山水底？",
    status: "partial",
    color: "#6e7d8c",
    timeline_ids: ["t78","t79","t80","t81","t82","t62","t63","t64"],
    note: "张家祖楼与葬地所在，内藏族迹与棺椁"
  },
  {
    id: "ms14",
    title: "「它」的轮廓",
    question: "藏在各起事件背后、时隐时现的势力「它」是什么？",
    status: "open",
    color: "#8c4a5e",
    timeline_ids: ["t67","t76"],
    note: "全书最大暗线，始终未被完整定义"
  },
  {
    id: "ms15",
    title: "黑瞎子身份",
    question: "黑瞎子是谁？他为何总在关键时刻出现？",
    status: "open",
    color: "#556055",
    timeline_ids: ["t43","t44","t45","t48","t54","t55"],
    note: "与张家及长生之谜的关联是跨卷悬念"
  },
  {
    id: "ms16",
    title: "吴邪的局",
    question: "吴邪隐忍多年布下的局，究竟要做到什么程度？",
    status: "answered",
    color: "#c9a227",
    timeline_ids: ["t43","t46","t48","t49"],
    note: "沙海结局局成，汪家多条暗线被切断"
  },
  {
    id: "ms17",
    title: "青铜神树物质化之谜",
    question: "山腹里的青铜神树为何能把念想变成实物？",
    status: "open",
    color: "#4a7d6a",
    timeline_ids: ["t19","t20","t21","t22","t23","t24","t25"],
    note: "只呈现现象，机制始终无解释"
  }
];
