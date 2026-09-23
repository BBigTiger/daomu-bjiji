# 上传到 GitHub 操作指南

> 项目：`D:\game\daomu`（已初始化为 git 仓库，已完成首次提交）
> GitHub 用户名：**Biggtiger**

## 一、前置：安装并登录 GitHub CLI（推荐，最简单）

1. 下载安装 [GitHub CLI](https://cli.github.com/)（Windows 版）
2. 打开 PowerShell 执行：

```powershell
gh auth login
```

按提示选择 GitHub.com → HTTPS → 浏览器授权，登录 **Biggtiger** 账号。

## 二、一键创建远程仓库并推送（gh 方式）

```powershell
cd D:\game\daomu
gh repo create daomu-bjiji --public --source=. --push --description "盗墓笔记全系列编年史：主时间线/人物志/发现物/交互地图/GeoJSON"
```

> 若想私有仓库，把 `--public` 改为 `--private`。

## 三、备用：手动创建仓库（无 gh CLI 时）

1. 浏览器登录 GitHub → 右上角 **+** → **New repository**
2. 仓库名填 `daomu-bjiji`，选 Public/Private，**不要**勾选 README/.gitignore（本地已有）
3. 创建后复制仓库地址（HTTPS 形式：`https://github.com/Biggtiger/daomu-bjiji.git`）
4. 在 PowerShell 执行：

```powershell
cd D:\game\daomu
git remote add origin https://github.com/Biggtiger/daomu-bjiji.git
git branch -M main
git push -u origin main
```

首次 push 会弹出**凭据管理器窗口**：选"Sign in with your browser"登录 Biggtiger 账号即可。

## 四、GitHub Pages 在线预览（可选，推荐）

推送成功后：

```powershell
gh api repos/Biggtiger/daomu-bjiji/pages -f source[branch]=main -f source[path]=/ -X POST
```

或在网页：仓库 Settings → Pages → Source 选 `main` 分支 `/` 根目录 → Save。
约 1 分钟后即可访问：`https://biggtiger.github.io/daomu-bjiji/map/盗墓笔记地图.html`

## 五、后续更新流程

```powershell
cd D:\game\daomu
git add -A
git commit -m "更新说明"
git push
```
