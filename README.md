# 我的学习小站

一个简单、轻松的个人学习记录网页，适合分享给学习小组。

## 页面特色

- 北海道冬日风景背景
- 移动端 App 化布局：顶部标题栏 + 底部 Tab
- 首页内置二维码，方便分享给学习小组

## 如何打开

直接用浏览器打开 `index.html` 即可。

## 如何修改内容

所有内容都集中在 `data.js` 文件里，不需要懂复杂的代码，只需要按格式添加或修改文字。

### 添加一条学习动态

找到 `updates` 数组，在数组里加一段：

```js
{
  date: "2026-05-21",
  title: "今天学了什么",
  content: "简单记录一下今天的学习内容和感受",
  tags: ["标签1", "标签2"],
},
```

### 添加一个 To Do 任务

找到 `todos` 数组，加一段：

```js
{ time: "14:30", task: "要完成的事情", done: false },
```

- `time`：时间
- `task`：任务内容
- `done`：是否已完成，`false` 未完成，`true` 已完成

在网页上也可以直接点击任务来切换完成状态，不过这个状态只保存在当前浏览器里；想让所有人都看到，还是在 `data.js` 里改 `done`。

### 添加一条感想

找到 `thoughts` 数组，加一段：

```js
{
  date: "2026-05-21",
  content: "今天的一些碎碎念",
},
```

### 修改个人资料

找到 `profile`，直接改 `name`、`bio`、`school` 等字段。

保存 `data.js` 后刷新网页即可看到变化。

## 背景音乐

网页支持背景音乐，默认是 CMJ 的《所念皆星河》。

**重要：浏览器不能直接播放 `.mgg` 格式。**
`.mgg` 是 QQ 音乐加密格式，需要转换成 `.mp3` 或 `.m4a` 后才能被网页播放。

当前使用的音乐文件是：

```
music/bgmusic.mp3
```

如果以后更换音乐文件，记得同步修改 `data.js` 里的 `music.src`。

然后在网页右下角点击 🎵 按钮即可播放/暂停。

## 手机上直接看 + 分享给小组成员

网页已经做好移动端 App 化适配：顶部固定标题栏 + 底部四个 Tab（要做 / 动态 / 学习 / 感想），手机浏览器打开就像一个小 App。

同时已经加入了 PWA 支持（`manifest.json` + `service-worker.js`）：
- 部署到网上后，用手机浏览器打开网址
- 可以“添加到主屏幕”，像一个小 App 一样使用
- 打开过一次后，离线也能看（内容以最后一次联网加载的版本为准）

## 部署到网上，以后只改这个文件夹就能更新

推荐用 **GitHub Pages**，免费且已经帮你配置好了自动部署文件（`.github/workflows/static.yml`）。

### 第一次部署（只需要做一次）

1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
2. 在 GitHub 网页上新建一个仓库，例如叫 `my-study-site`
3. 打开 GitHub Desktop，选择 Add → Add Existing Repository，选择这个 `personal-website` 文件夹
4. 在 GitHub Desktop 中点 Publish repository，把它发布到你刚建的仓库
5. 打开 GitHub 网页，进入仓库的 Settings → Pages，把 Source 设为 **GitHub Actions**
6. 等大约 1 分钟后，部署完成，你会得到一个网址：
   `https://你的用户名.github.io/my-study-site/`

### 以后每天怎么更新

只要修改 `data.js` 并保存，然后任选一种方式推送：

**方式 A：双击 `push.command`（最简单）**

第一次使用前，先打开终端执行一次：

```bash
chmod +x "/Users/ashley_zy/personal-website/push.command"
```

以后每次改完 `data.js`，双击 `push.command`，等它自动提交并推送到 GitHub，网站就会自动更新。

**方式 B：用 GitHub Desktop 手动提交**

1. 在左下角填写一个简短说明，比如“更新今天学习动态”
2. 点 Commit to main
3. 点 Push origin

推送成功后，GitHub 会自动部署，手机浏览器刷新就能看到新内容。

### 其他部署方式

- **Vercel**：把整个文件夹拖到 [vercel.com](https://vercel.com) 的 New Project 里，几秒钟即可上线。
- **Netlify**：打开 [netlify.com](https://netlify.com)，把文件夹拖进 Netlify Drop 里即可上线。

这两个平台也都可以和 GitHub 仓库联动：以后你 push 一次，网站就自动更新一次。
