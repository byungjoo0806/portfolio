import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="h-full w-full flex justify-center items-center px-6 bg-white/50 dark:bg-black/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Let&apos;s Connect
        </h2>

        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-12">
          I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 md:p-16 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href="mailto:andybyungjoopark@gmail.com"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full hover:scale-105 transition-transform font-medium text-sm"
            >
              <FaEnvelope className="text-base" />
              <span>Email Me</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/byungjoo0806"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-700 rounded-full hover:scale-105 transition-transform text-sm border border-gray-300 dark:border-gray-600"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/byungjoo-park-2700a4249/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-700 rounded-full hover:scale-105 transition-transform text-sm border border-gray-300 dark:border-gray-600"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <footer className="mt-16 text-gray-500 dark:text-gray-400">
          <p className="text-sm">&copy; {new Date().getFullYear()} Byungjoo Park. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
