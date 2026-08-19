// ============================================================
// 在这里修改你的个人内容即可，保存后刷新网页就能看到变化
// ============================================================

const siteData = {
  // 基本资料
  profile: {
    name: "Ashley_zy",
    avatar: "🐻",
    bio: "大二 正在不断学习中...",
    location: "深圳",
    workplace: "珠海",
    school: "中山大学",
    major: "人工智能",
    email: "zhanssh@mail2.sysu.edu.cn",
    bilibili: "Ashley_朝瑶",
    github: "Ashley_zy226",
  },

  // 背景音乐：把 mp3 放到 music 文件夹里，改这里即可
  music: {
    src: "music/bgmusic.mp3",
    title: "有好听的bgm记得告诉我!",
  },

  // 二维码：留空则自动使用当前网页地址
  qr: {
    title: "扫码访问我的学习小站",
    url: "",
  },

  // 正在学习的东西
  learning: [
    {
      title: "深度学习",
      desc: "科研入门小组Step1,动手学深度学习",
      tags: ["PyTorch"],
    },
    {
      title: "前端开发",
      desc: "想把网页做得更好看、更有创意",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "概率论与数理统计",
      desc: "大二上学期的一门课程",
      tags: ["3学分"],
    },
    {
      title: "算法竞赛",
      desc: "兴趣爱好、偶尔打打",
      tags: ["C++", "Codeforces","atcoder","leetcode"],
    },
  ],

  // 已经学过 / 已经掌握的东西
  learned: [
    "C / C++ 基础",
    "Python 基础",
    "numpy",
    "数据结构与算法",
    "高等数学/线性代数",
    "Git 基本使用",
  ],

  // 未来想学的东西
  future: [
    "ACM",
    "kaggle",
    "LLM",
    "计算机视觉",
  ],

  // To Do List：时间 + 任务，简约一点
  todos: [
    { time: "8/19", task: "3.1 线性回归", done: false },
    { time: "8/19", task: "3.2 线性回归的简洁实现", done: false },
    { time: "8/19", task: "2.2 随机变量的数学期望", done: false },
    { time: "8/19", task: "2.3 随机变量的方差与标准差", done: false },
    { time: "8/19", task: "Leetcode第500场周赛", done: false },
    { time: "9/10", task: "数学建模竞赛", done: false },
  ],

  // 学习动态 / 日志：按时间倒序展示
  updates: [
    {
      date: "2026-08-18",
      title: "把个人主页做出来了",
      content: "终于搭好了自己的学习小站，以后每天的学习记录都会写在这里。",
      tags: ["Web"],
    },
    {
      date: "2026-08-17",
      title: "开始学习深度学习",
      content: "好难...",
      tags: ["pytorch","神经网络","transformer"],
    },
    {
      date: "2026-07-27",
      title: "算法竞赛退坑",
      content: "太难了...不够聪明也不够努力呀",
      tags: ["算法", "ACM"],
    },
    {
      date: "2026-07-20",
      title: "成绩出完了",
      content: "没想象中那么差,但也没那么好",
      tags: ["绩点"],
    },
  ],

  // 一些感想 / 碎碎念
  thoughts: [
    {
      date: "2026-08-06",
      content: "想做的事太多,而自己的能力又太有限啊！",
    },
    {
      date: "2026-07-20",
      content: "出完成绩,考的也不算太差呀",
    },
  ],
};
