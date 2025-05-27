"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "./component/AnimatedSection";
import AnimatedBackground from "./component/AnimatedBackground";
// import ProjectsCard from "./component/ProjectsCard";
import ProjectsPage from "./projects/page";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
// import ProjectsCard from "./component/ProjectsCard";
// DO NOT import full pages directly into HomePage
// import AboutPage from "./about/page";
// import ProjectsPage from "./projects/page";
// import ContactPage from "./contact/page";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* === Animated Triangle Background === */}
      <AnimatedBackground />

      <div className="relative flex flex-col-reverse md:flex-row items-center justify-center px-6 py-16 text-center md:text-left gap-10 z-10">
        {/* === Left Section (Hero Text) === */}
        <div className="flex-1">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hello, I'm{" "}
              <span className="text-indigo-500 capitalize">
                abrahon mahmud sujon
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-6">
              A passionate web developer who loves building clean, animated, and
              user-friendly web applications with modern technologies like{" "}
              <strong>Next.js</strong>, <strong>React</strong>, and{" "}
              <strong>Tailwind CSS</strong>.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="/projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
              >
                Contact Me
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href="/resume.pdf"
                download
                className="px-5 py-3 bg-gray-900 text-white dark:bg-white dark:text-black rounded-md hover:scale-105 transition"
              >
                📄 Download Resume
              </a>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold">30+</p>
                  <p className="text-gray-600 dark:text-gray-400">Projects</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* === Right Section (Profile Image) === */}
        <AnimatedSection>
          <div className="flex-1 flex justify-center mb-10 md:mb-0">
            <Image
              src="/abrahon.jpg"
              alt="Profile"
              width={500}
              height={500}
              className="rounded-full shadow-lg hover:scale-105 transition duration-300"
              priority
            />
          </div>
        </AnimatedSection>
      </div>

      {/* If you want About, Projects, Contact on homepage — create components (not full pages) and import them here */}

      <AboutPage></AboutPage>
      <ProjectsPage></ProjectsPage>
      <ContactPage></ContactPage>
    </div>
  );
}
