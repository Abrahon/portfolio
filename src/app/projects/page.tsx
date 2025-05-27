// import AnimatedSection from '../components/AnimatedSection'
// import ProjectCard from '../components/ProjectCard'
import { projects } from "@/lib/data";
import AnimatedSection from "../component/AnimatedSection";
import ProjectsCard from "../component/ProjectsCard";
import AnimatedBackground from "../component/AnimatedBackground";

// export const metadata = {
//   title: "Projects | Sujon",
//   description: "Explore my recent web development projects and case studies.",
// };

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-4 py-20 max-w-6xl mx-auto">
      <AnimatedBackground></AnimatedBackground>
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      </AnimatedSection>
      {/* <AnimatedSection></AnimatedSection> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <AnimatedSection key={index}>
            <ProjectsCard {...project} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
