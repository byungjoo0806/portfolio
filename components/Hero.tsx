import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero" className="h-full w-full flex items-center justify-center px-6 py-12 overflow-y-auto">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="shrink-0">
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="/profile_pic.png"
                alt="Byungjoo Park"
                fill
                sizes="(min-width: 768px) 192px, 128px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-4 md:space-y-6">
            <div className="space-y-1">
              <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Byungjoo Park
              </h1>
              <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
                Andy
              </p>
            </div>

            <div className="space-y-1 text-sm md:text-lg text-gray-500 dark:text-gray-400">
              <p>Mobile and web developer &middot; Seoul</p>
              <p>Currently building Jigekun</p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1 md:pt-2">
              <a
                href="mailto:andybyungjoopark@gmail.com"
                className="flex items-center gap-1.5 px-4 py-2 md:px-6 md:py-3 bg-white dark:bg-gray-800 rounded-full hover:scale-105 transition-transform text-xs md:text-sm font-medium border border-gray-300 dark:border-gray-600 shadow-sm"
                aria-label="Email"
              >
                <FaEnvelope className="text-sm md:text-base" />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/byungjoo0806"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 md:px-6 md:py-3 bg-white dark:bg-gray-800 rounded-full hover:scale-105 transition-transform text-xs md:text-sm font-medium border border-gray-300 dark:border-gray-600 shadow-sm"
                aria-label="GitHub"
              >
                <FaGithub className="text-sm md:text-base" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/byungjoo-park-2700a4249/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 md:px-6 md:py-3 bg-white dark:bg-gray-800 rounded-full hover:scale-105 transition-transform text-xs md:text-sm font-medium border border-gray-300 dark:border-gray-600 shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-sm md:text-base" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
