import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 mb-6 md:mb-12">
            <div className="shrink-0">
              <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                <Image
                  src="/profile_pic.png"
                  alt="Byungjoo Park"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-2 md:space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Byungjoo Park
              </h1>
              <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
                Andy
              </p>
              <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 italic">
                &quot;Connecting the blocks, Connecting the world&quot;
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1 md:pt-2">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-1.5 px-4 py-2 md:px-6 md:py-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:scale-105 transition-transform text-xs md:text-sm font-medium border border-gray-300 dark:border-gray-600"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-sm md:text-base" />
                  <span>Email</span>
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 md:px-6 md:py-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:scale-105 transition-transform text-xs md:text-sm font-medium border border-gray-300 dark:border-gray-600"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-sm md:text-base" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 md:px-6 md:py-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:scale-105 transition-transform text-xs md:text-sm font-medium border border-gray-300 dark:border-gray-600"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-sm md:text-base" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-5 md:pt-10 mt-2">
            <div className="space-y-4 md:space-y-8 px-2">
              <p className="text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                I am a passionate full-stack developer with a strong focus on blockchain technology
                and modern frontend frameworks. My journey in tech combines a solid foundation in
                physics and astronomy with hands-on experience in web development.
              </p>

              <p className="text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                I&apos;m particularly interested in building decentralized applications that bridge
                the gap between complex blockchain technology and user-friendly interfaces.
                I believe in creating accessible, intuitive experiences that empower users to
                interact with cutting-edge technology.
              </p>

              <p className="text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                When I&apos;m not coding, I enjoy exploring new technologies, contributing to
                open-source projects, and connecting with the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}