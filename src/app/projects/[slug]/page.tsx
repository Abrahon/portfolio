"use client";

import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import { use } from "react";

type Props = {
  params: { slug: string };
};

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params); // ✅ for server components
  const project = projects.find((p) => p.slug === slug);

  // if (!project) return notFound();
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  if (!project) return notFound();

  return (
    <div className="min-h-screen px-6 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">{project.title}</h1>

      {/* === Image Slider === */}
      {project.imageUrls?.length > 0 && (
        <div
          ref={sliderRef}
          className="keen-slider mb-10 rounded-lg overflow-hidden shadow-lg"
        >
          {project.imageUrls.map((url, idx) => (
            <div key={idx} className="keen-slider__slide">
              <div className="w-full h-[300px] md:h-[500px] lg:h-[600px] relative rounded-md overflow-hidden">
                <Image
                  src={url}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* === Buttons === */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
          >
            🌐 Live Site
          </Link>
        )}
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition"
          >
            🐙 GitHub Repo
          </Link>
        )}
      </div>

      {/* === Features === */}
      {project.features && project.features.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">✨ Features:</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* === Technologies Used === */}
      {project.technologies && project.technologies.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">🛠️ Technologies Used:</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm dark:bg-indigo-800 dark:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* === Description === */}
    </div>
  );
}
