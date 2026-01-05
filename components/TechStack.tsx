import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiSolidity,
  SiAmazon,
  SiNextdotjs,
  SiFlutter
} from 'react-icons/si';

const techCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'Solidity', icon: SiSolidity, color: 'text-gray-700 dark:text-gray-300' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: 'text-cyan-500' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
      { name: 'Flutter', icon: SiFlutter, color: 'text-cyan-500' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
      { name: 'Express', icon: SiExpress, color: 'text-gray-700 dark:text-gray-300' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-700' },
    ],
  },
  {
    title: 'Tools & Deployment',
    skills: [
      { name: 'AWS EC2', icon: SiAmazon, color: 'text-orange-500' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="h-full w-full flex justify-center items-center px-6 bg-white/50 dark:bg-black/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {techCategories.map((category) => (
            <div key={category.title} className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-center">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-5 bg-white/50 dark:bg-black/30 rounded-xl hover:scale-105 transition-transform"
                  >
                    <skill.icon className={`text-4xl mb-3 ${skill.color}`} />
                    <span className="text-xs font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
