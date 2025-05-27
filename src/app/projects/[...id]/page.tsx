// app/projects/[id]/page.tsx
import { Projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default function ProjectDetailPage({ params }: Props) {
  const project = Projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="min-h-screen px-4 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-indigo-600">
        {project.title}
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-white px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {project.images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Screenshot ${index + 1}`}
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        ))}
      </div>

      <div className="flex gap-4">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Live Demo
          </Link>
        )}
        {project.sourceUrl && (
          <Link
            href={project.sourceUrl}
            target="_blank"
            className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-800"
          >
            Source Code
          </Link>
        )}
      </div>
    </div>
  );
}
