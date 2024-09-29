import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a third year student enrolled in the master track program at BINUS University. Please check out the rest of my portfolio to see my projects.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "LaperAh",
    link: "https://github.com/PierreKoding/AkhirOOP",
    image: project1,
    description:
      "A fully functional restaurant management software that utilizes Object-Oriented Programming (OOP) Principles, featuring capabilities to add, alter, delete, and view records, along with an integrated admin authentication system.",
    technologies: ["Java", "MySQL"],
  },
  {
    title: "Reviu.ID",
    image: project2,
    link: "https://github.com/tya-dittyaa/reviuid-website-next",
    description:
      "A web app where film enthusiast can review and chat around forums to interact with others so that they can review Indonesian movies.",
    technologies: ["React", "NextJS", "CSS"],
  },
  {
    title: "Household electricity consumption Machine Learning prediction",
    image: project3,
    link: "https://github.com/PierreKoding/Machine_Learning_Household_Power_Consumption_Prediction",
    description:
      "A project where I compare which machine learning algorithm have the best accuracy to predict power consumption from a household and then uses tkinter to make the GUI so that the software is easier to use",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A portfolio website showcasing my projects and skills as a developer.",
    technologies: ["React", "Vite", "CSS"],
  },
];
