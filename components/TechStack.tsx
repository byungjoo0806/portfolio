'use client';

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiSolidity,
  SiNextdotjs,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiGooglecloud,
  SiClaude
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const techCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'Dart', icon: SiDart, color: 'text-sky-600' },
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
      { name: 'Firebase', icon: SiFirebase, color: 'text-amber-500' },
    ],
  },
  {
    title: 'Tools & Deployment',
    skills: [
      { name: 'AWS EC2', icon: FaAws, color: 'text-orange-500' },
      { name: 'Google Cloud', icon: SiGooglecloud, color: 'text-blue-500' },
      { name: 'Claude API', icon: SiClaude, color: 'text-orange-600' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="h-full w-full flex justify-center items-center px-6 bg-white/50 dark:bg-black/50">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Tech Stack
        </h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides={true}
          // loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="pb-12"
        >
          {techCategories.map((category) => (
            <SwiperSlide key={category.title} className="h-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col h-[400px]">
                <h3 className="text-xl font-bold mb-6 text-center">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 flex-1">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
