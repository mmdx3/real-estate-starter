import React from 'react';
import hoseBanner from '../assets/img/house-banner.png';
const Banner = () => {
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
          <img src={hoseBanner} alt="" />
        </div>
      </section >
    </>
  )

    ;
};

export default Banner;
