'use client';

import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  {
    id: 1,
    title: 'EHCO',
    description: 'Real-time verified facts and timeline about Korean celebrities. Latest K-Pop news with accurate fact-checking.',
    image: '/ehco.png',
    tech: ['Next', 'Firebase', 'TypeScript'],
    team: '2 members',
    duration: 'Jan 2025 - ',
  },
  {
    id: 2,
    title: 'SkyTrade',
    description: 'SkyTrade lets you monetize your air rights, the legal right to use and control the space above buildings and land.',
    image: '/skytrade.png',
    tech: ['Rust', 'TypeScript'],
    duration: 'Oct 2024 - Jan 2025',
  },
  {
    id: 3,
    title: 'Human Arc',
    description: 'A startup mobile application focused on human connection and personal growth. Features real-time updates, user authentication, and a modern mobile-first design.',
    image: '/ArcAppIcon.png',
    tech: ['React Native', 'Firebase', 'TypeScript'],
    team: '2 members',
    duration: 'Mar 2024 - Aug 2024',
  },
  {
    id: 4,
    title: 'Real Estate STO',
    description: 'A blockchain-based Security Token Offering platform for real estate investments. Built in collaboration with Bounce;code, this project enables fractional ownership of real estate through tokenization.',
    image: '/bouncecode.png',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Solidity', 'Web3'],
    team: '5 members',
    duration: 'Nov 2023 - Dec 2023',
  },
  {
    id: 5,
    title: 'Steam100',
    description: 'A gaming platform project showcasing top Steam games with interactive features and user reviews.',
    image: '/steam100.png',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    team: '3 members',
    duration: 'July 2023 - Aug 2023'
  },
  {
    id: 6,
    title: 'Baeshimjas',
    description: 'Blockchain controlled jury system',
    image: '/baeshimjas.png',
    tech: ['React', 'Node.js', 'Solidity', 'Web3'],
    team: '3 members',
    duration: 'Seoul Web3 Festival'
  },
  {
    id: 7,
    title: 'LINKee',
    description: 'A social networking system where users share thoughts, photos, and chat.',
    image: '/linkee.png',
    tech: ['HTML', 'Node.js', 'Express', 'MySQL'],
    team: '3 members',
    duration: 'June 2023 - July 2023'
  },
  {
    id: 8,
    title: 'Sangpay',
    description: 'An online blockchain wallet to manage cryptocurrency.',
    image: '/sangpay.png',
    tech: ['HTML'],
    team: '3 members',
    duration: 'April 2023'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="h-full w-full flex justify-center items-center px-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
          }}
          className="pb-12"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl pb-5 overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-lg border border-gray-200 dark:border-gray-700 h-125 flex flex-col">
                {project.image && (
                  <div className="relative h-40 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                )}

                <div className="px-6 py-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                  {project.team && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                      {project.team} • {project.duration}
                    </p>
                  )}

                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
