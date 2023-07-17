import React, { useState } from 'react';
import hoseBanner from '../assets/img/house-banner.png';
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

const Banner = () => {
  const [Load_image, setLoadImage] = useState(false);
  const handleImageLoad = () => {
    setTimeout(() => setLoadImage(true), 500)
  };
  return (
    <>
      <section className='container mx-auto flex px-0 overflow-hidden justify-between  gap-6 mt-[50px]'>
        <div className='title   xl:mt-[12%] flex-col justify-center container text-center '>
          <h1 className='text-2xl xl:text-3xl animate__bounceIn'>
            <span className='text-fuchsia-600'>  خانه </span>
            رویایی خود را با ما اجاره کنید
          </h1>
          <h4 className='pt-5 text-sm'>
            تجزیه و تحلیل محصول و رشد قدرتمند، خود-خدمت برای کمک به شما در تبدیل تعامل و حفظ بیشتر</h4>
        </div>
        <div className='w-[50%] xl:block none'>
          <div onLoad={handleImageLoad} className='w-[395px] h-[396px] rounded-l-t overflow-hidden'>
            <img src={hoseBanner} alt="" className='w-[395px] h-[396px] none' />
            {Load_image ? (<img src={hoseBanner} alt="" className='w-[395px] h-[396px] ' />) : (<Skeleton width={'100%'} height={'100%'} className=''/>)}
          </div>
        </div>
      </section >
    </>
  )

    ;
};

export default Banner;
