import React from 'react';
import TopMenu from '../components/TopMenu';
import Banner from '../contents/blog/Banner';
import BlogInfo from '../contents/blog/BlogInfo';
import FallingBlocks from '../components/FallingBlocks';

type Props = {};

const Blog = (props: Props) => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <FallingBlocks />
        <TopMenu />
        <Banner />
        <BlogInfo />
    </div>
  )
}

export default Blog;