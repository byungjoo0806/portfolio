'use client';

import Image from 'next/image';
import { FaGraduationCap, FaCalendar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const education = [
  {
    id: 1,
    institution: 'KGA Bootcamp',
    logo: '/kga.png',
    degree: 'Full-Stack Web Development with Blockchain',
    duration: 'Feb 2023 - Dec 2023',
    description: '9-month intensive bootcamp focused on full-stack development and blockchain technology',
    highlights: [
      '4 team projects completed',
      'Blockchain & Smart Contract',
      'Full-stack web development',
    ],
  },
  {
    id: 2,
    institution: 'University of Virginia',
    logo: '/uva-logo.jpg',
    degree: 'Bachelor of Science in Astronomy-Physics',
    duration: 'Aug 2016 - Aug 2022',
    description: 'Comprehensive study of physics and astronomy with a focus on computational methods',
    highlights: [
      'Strong analytical thinking',
      'Problem-solving skills',
      'Research experience',
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="h-full w-full flex justify-center items-center px-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education
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
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          className="pb-12"
        >
          {education.map((edu) => (
            <SwiperSlide key={edu.id}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="shrink-0 mx-auto md:mx-0">
                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden bg-white/50 dark:bg-black/30 p-2">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                      {edu.institution}
                    </h3>

                    <div className="flex items-center justify-center md:justify-start gap-2 text-blue-600 dark:text-blue-400 mb-2 text-sm">
                      <FaGraduationCap />
                      <span className="font-medium">{edu.degree}</span>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 dark:text-gray-400 mb-4 text-xs">
                      <FaCalendar />
                      <span>{edu.duration}</span>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {edu.description}
                    </p>

                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start justify-center md:justify-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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
