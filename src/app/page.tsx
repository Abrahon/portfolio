"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "./component/AnimatedSection";
import AnimatedBackground from "./component/AnimatedBackground";
// import ProjectsCard from "./component/ProjectsCard";
import ProjectsPage from "./projects/page";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import SkillsPage from "./skills/page";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function HomePage() {
  return (
    <div className="relative min-h-screen mx-auto max-w-7xl overflow-hidden ">
      {/* === Animated Triangle Background === */}

      <div className="relative flex flex-col-reverse md:flex-row items-center justify-center px-6 py-16 text-center md:text-left gap-10 z-10">
        {/* === Left Section (Hero Text) === */}

        <div className="flex-1">
          <div className="flex gap-4 mb-6 justify-center md:justify-start">
            <a
              href="https://www.facebook.com/ABRAHON?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              <FaFacebook size={16} />
            </a>

            <a
              href="https://github.com/Abrahon"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
            >
              <FaGithub size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/md-sujon-2172a524b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              <FaLinkedin size={16} />
            </a>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm <br />
            <span className="text-indigo-500 capitalize">
              <Typewriter
                words={[
                  "Abrahon Mahmud Sujon",
                  "A Frontend Developer",
                  "A Full Stack Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-6">
            <span className="capitalize">
              <Typewriter
                words={[
                  "A passionate full stack developer who loves building clean, animated, and user-friendly web applications with modern technologies like Next.js, React,Tailwind CSS,Node js,Express js,MongoDB, python and Django.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </p>

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

          <div className="mt-10 flex flex-col items-center gap-4">
            <button className="btn btn-primary  bg-gradient-to-r from-purple-500 to-pink-500 mr-5">
              <a
                href="https://drive.google.com/file/d/1O-DnipUB_0cRTXCppFEHPzlBwSWdHF40/view?usp=sharing"
                download
                className="px-5 py-3 bg-gray-900 hover:bg-indigo-800 hover:text-white text-white dark:bg-white dark:text-black rounded-md hover:scale-105 transition"
              >
                📄 Download Resume
              </a>
            </button>
          </div>
        </div>

        {/* === Right Section (Profile Image) === */}

        <div className="flex-1 flex justify-center mb-10 md:mb-0">
          <Image
            src="/desk.png"
            alt="Profile"
            width={500}
            height={500}
            className=" shadow-lg transition-transform duration-500 spin-3d"
            // className=" shadow-lg"
            priority
          />
        </div>
      </div>

      {/* If you want About, Projects, Contact on homepage — create components (not full pages) and import them here */}

      <AboutPage></AboutPage>
      <ProjectsPage></ProjectsPage>
      <SkillsPage></SkillsPage>
      <ContactPage></ContactPage>
    </div>
  );
}
