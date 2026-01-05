export default function About() {
  return (
    <section id="about" className="h-full w-full flex justify-center items-center px-6 bg-white/50 dark:bg-black/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="p-10 md:p-16">
          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I am a passionate full-stack developer with a strong focus on blockchain technology
              and modern frontend frameworks. My journey in tech combines a solid foundation in
              physics and astronomy with hands-on experience in web development.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I&apos;m particularly interested in building decentralized applications that bridge
              the gap between complex blockchain technology and user-friendly interfaces.
              I believe in creating accessible, intuitive experiences that empower users to
              interact with cutting-edge technology.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              When I&apos;m not coding, I enjoy exploring new technologies, contributing to
              open-source projects, and connecting with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
