import type { Project, Work } from "../types/project";

const projects: Project[] = [
  {
    name: "Pulse",
    url: "https://pulse.cermuel.dev/",
    shortDescription:
      "Uptime monitoring and incident tracking for your services",
    description:
      "Pulse is a lightweight uptime monitoring service that keeps watch on your critical endpoints and lets you know the moment something breaks. Add a URL, set a check interval, and Pulse handles the rest — pinging your services on schedule, measuring response times, and storing every result.\n\nWhen a service goes down, Pulse opens a Flair incident automatically, logs every check during the outage, and fires an alert to your inbox. When it recovers, you get a resolution email with the full incident timeline. No manual tracking, no missed downtime.\n\nBuilt for developers and small teams who want the essentials without the enterprise price tag. Sign in with GitHub or Google, add your first pulse in under a minute, and share a public status page with your users using a clean, memorable URL.",
    image: "/assets/images/pulse.png",
    sector: ["devtools", "monitoring"],
  },
  {
    name: "Synqd",
    url: "https://synqd.vercel.app/",
    shortDescription: "Realtime file sharing across devices without limit",
    description:
      "Synqd is a fast, cross-platform file sharing experience that works instantly in your browser. No apps, no accounts, no size limits. Drop files between any devices using WebRTC peer-to-peer connections with WebSocket signaling for seamless discovery and transfers. \n\nBuilt for speed and simplicity, Synqd delivers AirDrop-like convenience on the web. Whether you're moving photos between your phone and laptop, sharing large video files, or transferring documents across operating systems, everything happens directly between devices with end-to-end encryption. The interface is clean and responsive, designed to feel native on mobile, tablet, and desktop. \n\nFiles transfer at maximum speed through direct peer connections, with real-time progress tracking and instant notifications. No cloud middleman, no upload delays, no storage quotas. Just open Synqd on any device with a browser, sync up, and share.",
    image: "/assets/images/synqd.png",
    sector: ["file sharing", "webRTC"],
  },
  {
    name: "Invites",
    url: "https://expo.dev/preview/update?message=Final+UI+designed+with+in-app+notifications&updateRuntimeVersion=1.0.0&createdAt=2025-11-24T12%3A23%3A03.654Z&slug=exp&projectId=e80e4492-3526-4536-aa7b-57ff533f1ef4&group=57cd23ee-6d4c-4d17-9897-069b4d6fda23",
    shortDescription:
      "A smooth, modern event invitation experience with built-in push notifications.",
    description:
      "Invites is a polished, mobile-first experience for creating and managing event invitations with real-time push notifications. Users can send event invites, track responses instantly, and receive timely alerts for updates or changes. The interface is clean, fast, and intuitive—built to feel effortless whether you're organizing small gatherings or larger events.\n\nDesigned with attention to detail and responsiveness, Invites delivers a seamless workflow from creating an event to notifying attendees. It emphasizes clarity, smooth interactions, and reliable notification handling to ensure every user stays informed and connected.\n\nHow to preview the app: \nDownload Expo Go on your Android or iPhone. \nClick the link above, and you can instantly open and preview the app inside Expo Go.",
    image: "/assets/images/invites.mp4",
    sector: ["events", "mobile dev"],
    isVideo: true,
  },
  {
    name: "SmartForm",
    url: "https://www.npmjs.com/package/@cermuel/smart-form",
    shortDescription:
      "type-safe React form component with built-in validation and Tailwind styling.",
    description:
      "SmartForm is a flexible, type-safe React form package designed to make form building effortless. Built with TypeScript, it provides intelligent type inference, built-in validation, and beautiful Tailwind CSS styling out of the box. Developers can quickly create fully functional forms without writing repetitive state or validation logic.\n\nIt supports multiple field types—including text, email, password, checkbox, select, date, and time—and includes quality-of-life features like password visibility toggles, custom validation patterns, and dynamic rendering for custom layouts. Every form is type-safe by default, ensuring clean, maintainable code with zero configuration.\n\nSmartForm is perfect for developers who want to build reliable, modern, and visually consistent forms fast. Whether you’re creating a quick login form or a complex multi-field registration page, SmartForm keeps your workflow efficient and your UI polished.",
    image: "/assets/images/smartform.png",
    sector: ["forms", "npm"],
  },
  {
    name: "Meridian",
    url: "https://meridian-xyz.vercel.app",
    shortDescription:
      "visualize how your React project’s files are connected through imports.",
    description:
      "Meridian is an interactive visualization tool that helps developers understand their React projects. After logging in with GitHub, you can select a repository and instantly see how pages, components, hooks, and other files are linked through imports—displayed as a dynamic node graph built with React Flow.\n\nYou can click any node to view its file contents in a syntax-highlighted panel or hover to preview its first few lines and imports. Each node is color-coded based on its type (page, component, hook, context, etc.), making complex projects easier to explore and debug.\n\nMeridian turns static codebases into living diagrams, making it perfect for understanding project structure, identifying dependencies, and onboarding faster.",
    image: "/assets/images/meridian.png",
    sector: ["dev tools", "visualization"],
  },
  {
    name: "Warts",
    url: "https://warts.cermuel.dev/",
    shortDescription:
      "A curated space for wallpaper art and creative expression",
    description:
      "Warts is a wallpaper gallery built for people who care about what's on their screen. Browse a curated collection of high-quality artwork and photography, download anything you like, and post your own art if you want to share it with others.\n\nNo algorithm, no feed, no noise. Just a clean space to find something beautiful for your desktop or phone. Artists can upload their work and get it in front of people who actually appreciate it.\n\nSimple by design — come for the wallpapers, stay for the art.",
    image: "/assets/images/warts.png",
    sector: ["art", "wallpapers"],
  },
  {
    name: "Snipp",
    url: "https://snipp-two.vercel.app",
    shortDescription: "Generate beautiful code snippet images in seconds.",
    description:
      "Snipp is a clean and minimal tool for turning your code into beautiful, shareable images—perfect for social posts, documentation, or portfolios. Inspired by ray.so, it allows users to paste or write code, choose themes, customize backgrounds, adjust padding, and export high-quality screenshots instantly.\n\nBuilt with Next.js and Tailwind CSS, Snipp focuses on speed, simplicity, and design precision. It supports syntax highlighting for multiple languages, custom color themes, and one-click download or copy-to-clipboard options.\n\nSnipp was built to make sharing code visually appealing and effortless for developers, designers, and content creators alike.",
    image: "/assets/images/snipp.mp4",
    sector: ["developer-tools", "design", "frontend"],
    isVideo: true,
  },
  {
    name: "TypeSmith",
    url: "https://typesmith.vercel.app",
    shortDescription: "Convert any code to TypeScript interfaces instantly.",
    description:
      "TypeSmith is a developer-focused tool that automatically converts code written in different languages such as Python, Go, Java, and JSON into strongly organized types and interfaces. It eliminates the repetitive manual work of defining types, bridging backend and frontend data structures with accuracy and consistency. The tool helps developers write cleaner, safer code while maintaining project-wide reliability.\n\nBeyond conversion, TypeSmith enforces strict typing standards across large-scale applications. It’s designed to integrate seamlessly into development workflows, saving time and preventing data mismatches between APIs and UI logic. TypeSmith brings automation and structure to projects where type safety is critical for scalability and collaboration.",
    image: "/assets/images/typesmith.png",
    sector: ["developer", "tooling"],
  },
];

const works: Work[] = [
  {
    title: "MAP",
    stack: "NextJS + Web Sockets + Redux",
    description: "Medical Advancement Platform",
    link: "https://www.linkedin.com/company/map-systems-inc",
  },
  {
    title: "Adashe",
    stack: "NextJS + Tailwind + Firebase",
    description: "Cooperative society management platform",
    link: "https://adashe.net/",
  },

  {
    title: "iVerify",
    stack: "React + TailwindCSS + API integration",
    description: "Biometric and business verification system",
    link: "https://iverify-uat-web-520860309312.us-central1.run.app/",
  },
  {
    title: "Couch",
    stack: "React + Tailwind + API integration",
    description:
      "Mental health platform with journaling and therapist matching",
    link: "https://www.joincouch.co/",
  },
];

export const project = { projects, works };
