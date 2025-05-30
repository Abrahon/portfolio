"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function SkillsPage() {
  return (
    <main className=" mx-auto max-w-7xl px-6 py-20 mb-10 bg-white dark:bg-black text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold  mb-12"
      >
        My Skills
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-800 dark:text-gray-100">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            className="p-6 border rounded-xl shadow-md cursor-pointer bg-white dark:bg-zinc-900 hover:bg-indigo-100 dark:hover:bg-indigo-600 hover:text-white transition-all hover:scale-105"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
          >
            <p className="text-lg font-semibold">{skill}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
