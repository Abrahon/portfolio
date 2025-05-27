// lib/data.ts

export const projects = [
  {
    title: "Real-Time Chat App",
    description:
      "A real-time chat application using Next.js, Socket.IO, and Tailwind CSS.",
    imageUrl: "/projects/chat-app.png",
    link: "https://yourchatapp.com",
  },
  {
    title: "AI Travel Planner",
    description: "Plan your trips with the power of AI and modern UX design.",
    imageUrl: "/projects/ai-travel.png",
    link: "https://aitravel.com",
  },
  {
    title: "Portfolio Website",
    description:
      "My own modern portfolio built with Next.js and Framer Motion.",
    imageUrl: "/projects/portfolio.png",
    link: "https://yourportfolio.com",
  },
];
// lib/data.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  images: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export const Projects: Project[] = [
  {
    id: "project-1",
    title: "Awesome Project One",
    description: "This project does awesome things using React and Next.js.",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    images: ["/projects/project1-1.png", "/projects/project1-2.png"],
    liveUrl: "https://live-demo.com/project-1",
    sourceUrl: "https://github.com/yourusername/project-1",
  },
  // add more projects here
];
