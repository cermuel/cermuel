export interface Project {
  name: string;
  url: string;
  description: string;
  shortDescription: string;
  image: string;
  sector: string[];
}

const projects: Project[] = [
  {
    name: "INIT",
    url: "https://init-theta.vercel.app",
    shortDescription: "A macOS-style web desktop built in the browser.",
    description:
      "INIT is a macOS-style web desktop environment built with Next.js that recreates the feel of a real computer system directly inside the browser. It features draggable, resizable windows, a functional dock, app launching, and persistent local storage that mimics an operating system’s file management. INIT combines performance and aesthetic realism to create a smooth, immersive experience for users who love desktop-like interactivity on the web.\n\nThe project was designed to explore how far modern web technologies can go in simulating native operating systems. Every element—from the icons to the context menus—was built to behave like macOS, giving users an authentic digital workspace without leaving the browser.",
    image: "/assets/images/init.png",
    sector: ["os", "simulation"],
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
  {
    name: "SpaceTrade",
    url: "https://getspacetrade.com/",
    shortDescription: "Trade crypto and pay bills with ease.",
    description:
      "SpaceTrade is a secure digital exchange platform that allows users to trade cryptocurrencies, redeem gift cards, and pay utility bills all in one place. It provides lightning-fast transactions, real-time rates, and a clean interface optimized for mobile users. With over 17,000 active users, the platform has become a trusted hub for both new and experienced traders looking for reliability and convenience.\n\nWhat sets SpaceTrade apart is its blend of security and simplicity. Every transaction is insured and protected, ensuring peace of mind for users. Its 24/7 uptime, responsive customer support, and competitive exchange rates make digital asset management effortless and rewarding.",
    image: "/assets/images/spacetrade.png",
    sector: ["crypto", "finance", "payments"],
  },
  {
    name: "Adashe",
    url: "https://adashe.net",
    shortDescription:
      "Digital cooperative platform for savings and contributions.",
    description:
      "Adashe is a modern digital cooperative-society platform that helps users save, contribute, and manage group finances transparently. Members can make contributions, request withdrawals, and track financial activity through a clean and user-friendly dashboard. The platform promotes accountability and trust by automating traditional cooperative functions through secure digital workflows.\n\nYou built the marketing website independently and collaborated on the web application to deliver a seamless user experience. The system’s interface simplifies group savings and expense management while ensuring financial data is secure and accessible. Adashe redefines how communities handle cooperative funding in today’s digital economy.",
    image: "/assets/images/adashe.png",
    sector: ["fintech", "cooperative"],
  },
  {
    name: "MAP",
    url: "https://mapis4u.com/",
    shortDescription: "Cloud ERP for hospitals and healthcare providers.",
    description:
      "MAP is a cloud-based ERP platform created for hospitals and healthcare providers to streamline operations and improve efficiency. It manages billing, patient scheduling, inventory, staff performance, and payments all from one connected dashboard. The system enhances communication between healthcare professionals and suppliers, ensuring data accuracy and faster decision-making across departments.\n\nBy digitizing key administrative processes, MAP reduces manual errors and boosts productivity. Its easy-to-navigate interface helps hospitals stay organized, maintain compliance, and deliver better patient outcomes. The platform demonstrates how digital transformation can bring clarity and structure to healthcare management on both small and large scales.",
    image: "/assets/images/map.png",
    sector: ["healthcare", "cloud", "erp"],
  },
  {
    name: "iVerify",
    url: "#",
    shortDescription: "Biometric and document  made simple.",
    description:
      "iVerify is a biometric and document verification system built for organizations that need to authenticate user identities quickly and securely. The platform uses facial recognition, document scanning, and data validation to confirm user information in real time. It provides administrators with a clear dashboard for managing verification requests, reviewing documents, and approving or rejecting users with confidence.\n\nYou worked specifically on the admin and officer dashboards, focusing on clarity, efficiency, and performance. iVerify places strong emphasis on trust and data integrity, ensuring that identity checks remain accurate and tamper-proof. It stands as a reliable solution for digital identity management.",
    image: "/assets/images/iverify.png",
    sector: ["security", "identity", "verification", "biometric"],
  },
];

const works = [
  {
    title: "MAP",
    stack: "NextJS + Web Sockets + Redux",
    description: "Medical Advancement Platform",
    link: "https://mapis4u.com/",
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
    link: "https://www.joincouch.co/", // replace with the actual link if different
  },
];

export const project = { projects, works };
