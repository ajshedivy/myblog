const { hkdf } = require("crypto")

const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Adam Shedivy",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "software developer",
    bio: "I ❤️ open source.",
    email: "ajshedivyaj@gmail.com",
    linkedin: "adam-shedivy-2619a1166",
    github: "ajshedivy",
    instagram: "",
  },
  projects: [
    {
      name: `Mapepire`,
      href: "https://mapepire-ibmi.github.io/",
    },
    {
      name: `Db2 for i Extension for VSCode`,
      href: "https://github.com/codefori/vscode-db2i"
    },
  ],
  // blog setting (required)
  blog: {
    title: "Adam's Blog",
    description: "welcome to My Blog!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://adamshedivy-blog.vercel.app/",
  since: 2025, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
