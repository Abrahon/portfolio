import { projects } from "@/lib/data";
import AnimatedSection from "../component/AnimatedSection";
import ProjectsCard from "../component/ProjectsCard";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <AnimatedSection key={index}>
            <ProjectsCard
              title={project.title}
              imageUrls={project.imageUrls}
              slug={project.slug}
              shortDescription={project.shortDescription}
            />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
