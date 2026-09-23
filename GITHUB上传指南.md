# 上传到 GitHub 操作指南（最新）

> 项目：`D:\game\daomu` —— **git 仓库已初始化、4 次提交、main 分支就绪、远程地址已配置**
> GitHub 用户名：**Biggtiger** ｜ 仓库名：**daomu-bjiji**
> 远程地址（已添加）：`git@github.com:Biggtiger/daomu-bjiji.git`

---

## ✅ 已完成的部分（无需再操作）

- 本地 git 仓库初始化 + 4 次提交（主时间线/人物志/发现物/地图/GeoJSON）
- 分支已改名为 `main`
- 远程 `origin` 已指向你的仓库地址
- 本机已有 SSH 密钥对（`~/.ssh/id_ed25519`）

## ⏳ 唯一未完成的：把 SSH 公钥绑定到你的 GitHub 账号

**这一步必须由你在浏览器完成**（GitHub 不允许第三方代登录）。步骤如下：

### 1. 复制公钥

本机公钥内容为：

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFDqxweoT47ek7rLOI2qSUR83fho0CAwRuKyD33wMOWb admin@DESKTOP-8845CDS
```

（或重新查看：在 PowerShell 执行 `Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub`）

### 2. 添加到 GitHub

1. 浏览器登录 https://github.com/Biggtiger
2. 右上角头像 → **Settings** → 左侧 **SSH and GPG keys** → **New SSH key**
3. Title 随意（如 `DESKTOP-8845CDS`），Key 粘贴上面的公钥 → **Add SSH key**

### 3. 创建远程仓库（若还没建）

浏览器打开 https://github.com/new ，仓库名填 `daomu-bjiji`，Public/Private 自选，**不要**勾选任何初始化选项，点 Create。

### 4. 推送（在 PowerShell 执行）

```powershell
cd D:\game\daomu
git push -u origin main
```

### 5. 在线预览（可选）

GitHub 网页：仓库 **Settings → Pages** → Source 选 `main` 分支 `/` 根目录 → Save。
约 1 分钟后访问：`https://biggtiger.github.io/daomu-bjiji/map/盗墓笔记地图.html`

---

## 备注

- 若你更想用浏览器授权方式（免 SSH 配置）：安装 [GitHub CLI](https://cli.github.com/) 后执行 `gh auth login`，然后 `gh repo create daomu-bjiji --source=. --push`。
- 后续更新：`cd D:\game\daomu; git add -A; git commit -m "说明"; git push`