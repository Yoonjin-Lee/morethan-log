const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Yoonjin Lee",
    image: "/notion-avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "android/embedded developer",
    bio: "I develop to support human life",
    email: "peacemiller@naver.com",
    linkedin: "yoonjin-lee-kr",
    github: "Yoonjin-Lee",
    instagram: "",
  },
  projects: [
    {
      name: `미주정복`,
      href: "https://github.com/Yoonjin-Lee/us-dividend",
    },
  ],
  // blog setting (required)
  blog: {
    title: "yoonjin-blog",
    description: "welcome to yoonjin-blog!",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://yoonjin-blog.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://prod-files-secure.s3.us-west-2.amazonaws.com/26d3bcb9-17a8-4772-a18b-af2254fa4260/5b2de4d1-9bb3-4bd0-9468-29c3ac5c0189/notion-avatar.png", // The link to generate OG image, don't end with a slash

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
  revalidateTime: 60 * 30, // 30 mins
}

module.exports = { CONFIG }
