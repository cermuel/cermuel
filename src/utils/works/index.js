import Rickipedia from "../../assets/images/rickipedia.png";
import Portfolio from "../../assets/images/portfolio.png";
import Soundseek from "../../assets/images/soundseek.png";
import Netflix from "../../assets/images/netflix.svg";
import goalz from "../../assets/images/goalz.png";
import orb from "../../assets/images/orb.png";
import rick from "../../assets/images/rick.png";
import keppler from "../../assets/images/keppler.png";
import minder from "../../assets/images/minder.png";
import tokyo from "../../assets/images/tokyo.png";

export const rickipedia =
  "I had the pleasure of creating a Website using the Rick and Morty API, which showcases characters and information from the popular animated TV show. The project involved designing and developing a Website that displayed the information in a fun and engaging way, while also being easy to use and navigate.<br />To begin, I first explored the Rick and Morty API to understand its functionality and limitations. Then, I created a custom design for the Website using HTML, CSS, and JavaScript. I made sure to incorporate the show's signature colors and design elements to create a cohesive and recognizable look.<br />The site features a responsive design that works well on both desktop and mobile devices. Users can search for characters by name, view detailed character information, and even save their favorite characters to a favorites list.<br />Overall, this project was a great opportunity to work with an API and create a fun and engaging Website. I am proud of the final product and believe it demonstrates my skills in web development and design.";
export const soundseek =
  "I had the pleasure of creating a music site for my client that allows other musicians to post their own content. The project involved designing and developing a Website that provided a platform for musicians to share their music and connect with their audience.<br />I worked with the client to understand their vision and needs, and then used my expertise in web development to create a responsive Web App that incorporated their branding and aesthetic. The site features a responsive design, an easy-to-use interface for submitting music, and user-generated content that can be shared on social media.<br />To ensure that the site was scalable and could handle a large volume of user-generated content, I utilized various plugins and APIs to optimize performance and functionality. The site also includes a built-in music player that allows users to listen to music without leaving the site.<br />Overall, this project was a great opportunity to combine my technical skills with my passion for music and create a platform that empowers musicians to share their music with the world. I am proud of the final product and believe it demonstrates my skills in web development and user experience design.";
export const portfolio =
  "I created a personal portfolio showcasing my projects and skills using React.js, Tailwind CSS, and ChatGPT. This website serves as a comprehensive overview of my work and capabilities.<br />With React.js, I developed a dynamic and interactive portfolio that offers seamless navigation and a smooth user experience.<br />Tailwind CSS provided a robust and responsive design system, ensuring a visually appealing and cohesive presentation of my projects and skills.<br />Additionally, I integrated ChatGPT, an AI-powered chatbot, to provide an interactive element for visitors, enabling them to ask questions or get more information about my work.<br />Through this personal portfolio, I have effectively demonstrated my technical skills, creativity, and ability to build engaging web experiences.";
export const netflix =
  "I recently created a Netflix clone using TMDB API and React Native. The project allowed me to gain experience in building Mobile Applications and working with APIs. The application was built using React Native for the front-end, with the TMDB API serving as the primary data source for the movie and TV show information.<br />The Netflix clone includes a home screen with a list of trending movies and TV shows, as well as the ability to search for specific titles. Users can also view more information about each title, including a synopsis, ratings, and cast information. Throughout the development process, I had to work with various React Native libraries to achieve the desired functionality. Additionally, I utilized various debugging techniques to resolve any issues that arose.<br />Building a Netflix clone with TMDB API and React Native was an exciting and challenging project that helped me develop my skills as a Mobile App developer. I gained valuable experience in working with APIs and integrating external data sources into my projects. Overall, the project allowed me to learn how to build scalable, high-quality Mobile Applications and provided a great opportunity to showcase my skills as a developer.";
export const minderText =
  "I had the pleasure of creating the Minder website, a platform where users can share their thoughts and ideas while connecting with like-minded individuals.<br />This project involved designing and developing a website that provided a seamless and intuitive user experience.<br />By utilizing React, the Spotify API, and Firebase, I built a custom website that allows users to express themselves, connect with a community, and discover new music.<br />The responsive design ensures accessibility across devices, providing a user-friendly platform for sharing and engaging with thoughts.<br />Working on the Minder project has allowed me to showcase my expertise in web development, API integration, and creating engaging user experiences.<br />This resulted in a platform that fosters connection and amplifies users' ideas.";
export const goalzWebText =
  "I had the pleasure of creating a football site using Next.js, the ESPN API, and Firebase. This dynamic website showcases teams and their details, recent football scores, and the latest football news, specifically focusing on soccer.<br />By leveraging the power of Next.js, I developed a responsive and interactive platform that provides users with comprehensive information about their favorite teams and recent match results.<br />The integration with the ESPN API allows for real-time data retrieval, ensuring that the website stays up-to-date with the latest football scores and news.<br />Additionally, Firebase was utilized to handle user authentication and data storage, providing a secure and seamless experience for visitors.<br />Working on this football site has allowed me to demonstrate my expertise in Next.js development, API integration, and creating engaging sports-oriented web applications.<br />I am proud of the final product, which offers football enthusiasts a comprehensive platform to stay updated with their favorite teams and the latest soccer news.";
export const kepplerText =
  "I had the opportunity to create a clone of an original site that offers real-time code sharing for lectures and presentations. This project involved building a platform that enables users to collaborate and share code seamlessly in real-time.<br />By developing the clone using modern web technologies such as React.js, I ensured a responsive and intuitive user interface that replicates the functionality of the original site.<br />Through careful implementation, I incorporated features that allow users to create, edit, and share code snippets, facilitating effective collaboration during lectures and presentations.<br />The clone successfully captures the essence of the original site, providing a valuable tool for educators and presenters to engage their audience and enhance the learning experience through real-time code sharing.";
export const works = [
  {
    title: "Minder",
    type: "Web App",
    image: minder,
    text: minderText,
    reverse: true,
    url: "https://minder.vercel.app",
  },
  {
    title: "Rickipedia",
    type: "Web App",
    image: Rickipedia,
    text: rickipedia,
    reverse: false,
    url: "https://rickipedia.brimble.app/",
  },
  {
    title: "Goalz",
    type: "Web App",
    image: goalz,
    text: goalzWebText,
    reverse: true,
    url: "https://goalzzz.vercel.app/",
  },
  {
    title: "Goalz Mobile App",
    type: "Mobile App",
    image: goalz,
    text: netflix,
    reverse: false,
    url: "",
  },
  {
    title: "Netflix",
    type: "Mobile App",
    image: Netflix,
    text: netflix,
    reverse: true,
    url: "https://expo.dev/@cermuel/netflix?serviceType=classic&distribution=expo-go",
  },

  {
    title: "Portfolio",
    type: "Website",
    image: Portfolio,
    text: portfolio,
    reverse: false,
    url: "https://cermuel.brimble.app/",
  },
  {
    title: "Soundseek",
    type: "Web App",
    image: Soundseek,
    text: soundseek,
    reverse: false,
    url: "https://soundseek-user.vercel.app/",
  },

  {
    title: "Keppler",
    type: "Website",
    image: keppler,
    text: kepplerText,
    reverse: true,
    url: "https://keppler.brimble.app/",
  },
  {
    title: "Littlest Tokyo",
    type: "ThreeJS",
    image: tokyo,
    text: soundseek,
    reverse: false,
    url: "https://tokyo.brimble.app/",
  },
  {
    title: "Orbvironment",
    type: "ThreeJS",
    image: orb,
    text: soundseek,
    reverse: true,
    url: "https://orbvironment.brimble.app/",
  },
  {
    title: "Rick Chat",
    type: "Web App",
    image: rick,
    text: soundseek,
    reverse: false,
    url: "https://rick-chat.vercel.app/",
  },
];
