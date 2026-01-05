'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export default function Home() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Navigation swiperInstance={swiperInstance} activeIndex={activeIndex} />
      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel={{
          releaseOnEdges: true,
          sensitivity: 1,
          thresholdDelta: 50,
          thresholdTime: 500,
        }}
        speed={800}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="h-screen w-full"
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <Projects />
        </SwiperSlide>
        <SwiperSlide>
          <TechStack />
        </SwiperSlide>
        <SwiperSlide>
          <Education />
        </SwiperSlide>
        <SwiperSlide>
          <Contact />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
