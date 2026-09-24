// 人物行踪轨迹数据（参考 daomu-map 的 trajectories.js 设计）
// 每条轨迹 = 一组 {id: 地点ID, note: 该站发生的事}
// 地点ID 必须存在于 data_locations_raw.json
export const trajectories = {
  // 张起灵：神秘守护者的一生
  zhangqiling: {
    name: "张起灵",
    color: "#6e7d8c", // 冷铁灰
    stops: [
      { id: "loc01", note: "杭州古玩店初遇吴邪，背剑盒现身" },
      { id: "loc04", note: "随队赴山东临沂，沿途相随" },
      { id: "loc06", note: "鲁王宫斩杀血尸，展露身手" },
      { id: "loc10", note: "西沙海底墓，失忆线索初现" },
      { id: "loc16", note: "长白山云顶天宫，旧地熟稔" },
      { id: "loc18", note: "青铜门前交鬼玺于吴邪，独入守护终极" },
      { id: "loc20", note: "蛇沼鬼城，记忆碎片浮现" },
      { id: "loc25", note: "张家古楼，身世线交汇" },
      { id: "loc18", note: "2015-08-17 出关，十年之约兑现" },
      { id: "loc33", note: "墨脱身世往事（藏海花）" },
      { id: "loc36", note: "重启·雷城之行" }
    ]
  },
  // 王胖子：铁三角的活宝
  wangpangzi: {
    name: "王胖子",
    color: "#7a6f58", // 灰褐
    stops: [
      { id: "loc06", note: "鲁王宫墓中结识吴邪，从此搭伙" },
      { id: "loc10", note: "西沙海底墓随行" },
      { id: "loc16", note: "云顶天宫雪线硬仗" },
      { id: "loc20", note: "蛇沼塔木陀同行" },
      { id: "loc22", note: "巴乃村对云彩一见钟情" },
      { id: "loc25", note: "张家古楼冒险" },
      { id: "loc18", note: "十年之约见证人" },
      { id: "loc36", note: "重启·南海王地宫" }
    ]
  },
  // 三叔（吴三省/解连环）：迷雾中的引路人
  sanshu: {
    name: "三叔",
    color: "#b0552e", // 铁锈红
    stops: [
      { id: "loc01", note: "杭州三叔牵线初遇张起灵" },
      { id: "loc06", note: "鲁王宫带队下墓" },
      { id: "loc10", note: "西沙海底墓，疑云初现" },
      { id: "loc07", note: "尸洞水道同行" },
      { id: "loc33", note: "（解连环线）墨脱身世" },
      { id: "loc36", note: "重启·三叔遗信" }
    ]
  }
};