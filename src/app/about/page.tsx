import Image from "next/image";
import AnimatedSection from "../component/AnimatedSection";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center md:items-start gap-12 text-white">
      {/* Animated Profile Image Section */}
      <AnimatedSection>
        <div className="relative rounded-full overflow-hidden shadow-2xl border-4 border-indigo-700 w-[400px] h-[400px] group">
          <Image
            src="/abrahon.jpg"
            alt="Profile"
            fill
            className="object-cover transition-transform duration-700 group-hover:rotate-[360deg]"
            priority
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-700 group-hover:opacity-100 rounded-full" />
        </div>
      </AnimatedSection>

      {/* Animated Text Content Section */}
      <AnimatedSection>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6 text-center md:text-left text-white">
            About Me
          </h1>

          <p className="text-lg text-gray-300 mb-6 text-center md:text-left max-w-xl">
            Hi, I&apos;m <span className="text-white font-semibold">Sujon</span>
            , a Full Stack Developer and Software Engineer currently studying at{" "}
            <span className="text-white font-semibold">
              Green University of Bangladesh
            </span>
            , Department of Computer Science and Engineering (CSE).
          </p>

          <p className="text-lg text-gray-300 text-center md:text-left max-w-xl">
            I love building web applications using modern technologies like{" "}
            <strong>React</strong>, <strong>Next.js</strong>,{" "}
            <strong>Tailwind CSS</strong>, <strong>MongoDB</strong>, and{" "}
            <strong>Node.js</strong>. I&apos;m passionate about creating elegant
            UI/UX and solving real-world problems with clean, scalable code.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
