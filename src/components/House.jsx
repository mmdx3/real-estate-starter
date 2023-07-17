import React, { useContext, useState } from 'react';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { Link } from 'react-router-dom';
import { houseList } from './HouseContext';
import { ImSpinner2 } from 'react-icons/im';
import Skeleton from 'react-loading-skeleton' ;
import "react-loading-skeleton/dist/skeleton.css";
const House = () => {
  const [loadimage , setloadimage] = useState(false) ;
  const { houses } = useContext(houseList);
  const { Loading } = useContext(houseList);
  const handleImageLoad = () => {
    setTimeout(() => setloadimage(true) , 500)
  };

  if (Loading) {
    return (
      <>
        <ImSpinner2 className='mx-auto text-4xl text-violet-700 animate-spin my-[200px] ' />
      </>
    )
  }

  if (houses.length < 1) {
    return <div className='flex justify-center mx-auto pb-[200px] pt-24  text-gray-400 text-4xl font-bold '>Sorry, Nothing found </div>
  }
  return (
    <>
      <div className='container xl:px-20 mx-auto mt-4 mb-8 pb-5 grid grid-cols-1 xl:grid-cols-3 gap-8 justify-between max-w-sm xl:max-w-none md:grid-cols-2 md:max-w-2xl lg:max-w-3xl' >
        {
          houses.map((house, index) => {
            return (
              <div key={index} className=' post-shadow felx-col  px-6 rounded-lg py-4 cursor-pointer active:scale-[0.9] transition-all duration-200 delay-0 ease-linear hover:scale-[1.05]'>
                <Link to={`/PropertyDetails/${house.id}`} >
                  <div className="w-[304px] h-[304px] md:w-[256px] md:h-[256px] lg:w-[288px] lg:h-[288px]">
                    <img onLoad={handleImageLoad} src={house.image} alt='house' className='w-[304px] h-[304px] md:w-[256px] md:h-[256px] lg:w-[288px] lg:h-[288px] none' />
                    {loadimage ? ( <img onLoad={handleImageLoad} src={house.image} alt='house' className='w-[304px] h-[304px] md:w-[256px] md:h-[256px] lg:w-[288px] lg:h-[288px]' />) : ( <Skeleton width={"100%"} height={'100%'} />)}
                  </div>
                </Link>
                <div className='flex-col container pt-4 px-0'>
                  <div className="flex justify-start ">
                    <h1 className='bg-green-500 text-center text-white  rounded-lg w-auto px-[15px] leading-[35px] h-[35px]'>{house.type}</h1>
                    <h1 className='bg-violet-500 ml-2 text-white  text-center rounded-lg px-[15px] leading-[35px] h-[35px]'>{house.city}</h1>
                  </div>
                  <div className='text-2xl flex-wrap font-bold my-3'>
                    {house.address}
                  </div>
                  <div className='flex justify-start container px-0 gap-2'>
                    <div className='flex gap-2'>
                      <BedIcon className='dropdown-icon-secondary' />
                      <h1 className='text-gray-400'>{house.bedrooms}</h1>
                    </div>
                    <div className='flex gap-2'>
                      <BathtubIcon className='dropdown-icon-secondary' />
                      <h1 className='text-gray-400'>{house.bathrooms}</h1>
                    </div>
                    <div className='flex gap-2'>
                      <AspectRatioIcon className='dropdown-icon-secondary' />
                      <h1 className='text-gray-400'>{house.surface}</h1>
                    </div>
                  </div>
                  <div className='text-fuchsia-500 font-bold py-3 items-end' >
                    $ {house.price}
                  </div>
                </div>

              </div>
            );
          })}
      </div >
    </>
  );
};

export default House;
