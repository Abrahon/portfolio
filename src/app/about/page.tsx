import Image from "next/image";
import AnimatedSection from "../component/AnimatedSection";

const timeline = [
  { year: "2023", text: "Started learning web development" },
  { year: "2024", text: "Built multiple freelance projects" },
  { year: "2025", text: "Focused on Next.js & advanced UI/UX" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedSection>
        <Image
          src="/abrahon.jpg"
          alt="Profile"
          width={400}
          height={400}
          className="rounded-full shadow-lg object-cover"
          priority
        />
      </AnimatedSection>

      <div className="flex-1">
        <AnimatedSection>
          <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
            About Me
          </h1>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 text-center md:text-left max-w-xl">
            I'm a self-taught developer who loves building interactive UIs and
            solving real-world problems using modern web technologies.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="border-l-4 border-indigo-600 pl-6 space-y-8 max-w-xl mx-auto md:mx-0">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-3 top-1 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white dark:border-gray-900" />
                <p className="font-bold text-indigo-600">{item.year}</p>
                <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
