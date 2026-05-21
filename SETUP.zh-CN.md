# Portify 本地搭建（中文）

项目已克隆到 `portify/` 目录，**不需要域名**即可开始。

## 你需要准备什么

| 项目 | 是否必须 | 说明 |
|------|----------|------|
| **Node.js 18+** | 建议 | 当前环境若是 16，请安装 [Node LTS](https://nodejs.org/) |
| **npm** | 是 | 随 Node 安装 |
| **GitHub 账号** | 上线时需要 | 推代码 + Vercel 部署 |
| **自定义域名** | **否** | 先用 `http://localhost:3000` 和免费的 `xxx.vercel.app` |

## 第一步：本地预览

```powershell
cd d:\pycharm\MyResume\portify
npm install
npm run dev
```

浏览器打开：**http://localhost:3000**

选模板（可选）：**http://localhost:3000/templates**  
当前默认使用 **Base** 模板（`config/app-data/appSetting.ts`）。

## 第二步：改你的内容

主要编辑 `config/user-data/`（部署到 Vercel 时需要一并提交到 GitHub，只放你愿意公开的信息）：

| 文件 | 作用 |
|------|------|
| `userInfo.ts` | 姓名、一句话介绍、头像 |
| `projects.ts` | **项目卡片**（最重要） |
| `socials.ts` | GitHub、邮箱等链接 |

已关闭的模块（无需填写）：

- 工作经历 → `config/app-data/templates/base.ts` 里 `WORK_EXPERIENCE_SECTION: false`
- 技能 → `SKILLS_SECTION: false`

若要换 **Shadow** 模板，修改 `config/app-data/appSetting.ts`：

```ts
template: AVAILABLE_TEMPLATES.SHADOW,
```

## 第三步：部署到 Vercel（免费 `https://xxx.vercel.app`）

### 需要准备的账号

1. [GitHub](https://github.com) 账号（用来放代码）
2. [Vercel](https://vercel.com) 账号（建议用 **Continue with GitHub** 登录，后面一键导入仓库）

### A. 把代码推到「你自己的」GitHub 仓库

> 不要推到 `IDAN-DEVS/portify` 原仓库；需要在你账号下新建一个空仓库。

1. 打开 https://github.com/new  
2. 仓库名例如：`my-portfolio`，选 **Public**，**不要**勾选 “Add a README”  
3. 创建后记下地址，例如：`https://github.com/你的用户名/my-portfolio.git`

在 PowerShell 执行（把用户名和仓库名换成你的）：

```powershell
cd d:\pycharm\MyResume\portify

# 去掉指向原作者的远程地址，改成你的仓库
git remote remove origin
git remote add origin https://github.com/你的用户名/my-portfolio.git

# 提交你的修改（含 config/user-data 里的个人配置）
git add .
git commit -m "我的作品集站点"
git branch -M main
git push -u origin main
```

第一次 `git push` 会提示登录 GitHub（浏览器或 Personal Access Token）。

### B. 在 Vercel 导入并部署

1. 打开 https://vercel.com ，用 GitHub 登录  
2. 点击 **Add New…** → **Project**  
3. 在列表里找到刚推送的 `my-portfolio`，点 **Import**  
4. 配置页一般保持默认即可：
   - **Framework Preset**：Next.js（自动识别）
   - **Root Directory**：`./`（仓库根就是 portify 内容时不用改）
   - **Build Command**：`npm run build`（默认）
   - **Output Directory**：Next.js 默认（不用改）
5. 点 **Deploy**，等待 1～3 分钟  

### C. 拿到免费网址

部署成功后页面会显示：

**`https://my-portfolio-xxx.vercel.app`**（具体名字由 Vercel 生成）

之后每次 `git push` 到 `main`，Vercel 会自动重新部署。

### 常见问题

| 现象 | 处理 |
|------|------|
| 网页是原版英文示例 | `config/user-data` 没 push 上去，检查 `git add config/user-data` 后再 push |
| Build 失败 Node 版本 | Vercel 项目 → **Settings** → **Node.js Version** 选 **20.x** |
| 想换域名前缀 | **Settings** → **Domains** 可改或绑定自己的域名 |

## 域名（以后再说）

满意后再买域名，在 Vercel → Settings → Domains 绑定即可。之前一直用免费子域名完全够用。

## 常用命令

```powershell
npm run dev      # 开发
npm run build    # 生产构建（会先 init-config）
npm run start    # 运行构建结果
```

## 项目结构速查

```
portify/
├── config/user-data/     ← 你的个人信息与项目（改这里）
├── config/app-data/      ← 模板开关、选用 Base/Shadow
├── public/images/        ← 本地图片放这里
├── templates/            ← 页面模板
└── app/                  ← Next.js 路由
```

有问题可继续在本仓库里改，或参考上游：https://github.com/IDAN-DEVS/portify
