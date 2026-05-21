export interface Project {
  title: string
  role: string
  description: string
  url: string
  previewImage: string
}

export const UserProjectsData: Project[] = [
  {
    title: "示例项目一",
    role: "独立开发",
    description:
      "用一两段话说明项目做了什么、解决了什么问题、用了哪些技术。把这条复制多份即可添加更多项目。",
    url: "https://github.com/你的用户名/项目仓库",
    previewImage: "https://iili.io/2xguHU7.md.png",
  },
  {
    title: "示例项目二",
    role: "全栈",
    description: "第二个项目的简介。previewImage 可以是公网图片链接，或放在 public/images/ 后用 /images/xxx.png。",
    url: "https://github.com/你的用户名/另一个项目",
    previewImage: "/images/jc_img_1.png",
  },
]
