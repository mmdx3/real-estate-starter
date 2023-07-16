import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { houseList } from '../components/HouseContext';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';

const PropertyDetails = () => {
  const { houses } = useContext(houseList)
  const { id } = useParams();

  const [filteredHouse, setFilteredHouse] = useState([]);

  useEffect(() => {
    const filteredData = houses.filter(h => h.id === +(id));
    setFilteredHouse(filteredData[0]);
  }, [houses, id]);

  return (
    <div className='rtl container mx-auto lg:px-20 lg:pb-[100px]'>
      <div className='py-5'>
        <h1 className='text-2xl font-bold'>{filteredHouse.name}</h1>
        <div className="flex flex-col gap-2 lg:flex-row lg:justify-between ">
          <div>{filteredHouse.address}</div>
          <div className='flex flex-row gap-4 '>
            <div className='bg-violet-700 rounded-md h-[25px] px-2 text-center items-center text-white'><h1 className='leading-[25px]'>{filteredHouse.city}</h1></div>
            <div className='bg-green-500 rounded-md h-[25px] px-2 text-center items-center text-white'><h1 className='leading-[25px]'>{filteredHouse.type}</h1></div>
          </div>
          <div className='pt-2 text-2xl text-violet-800 font-bold lg:pt-0' >
            $ <span>{filteredHouse.price}</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-6 pb-5'>
        <div className='flex flex-col gap-3 lg:w-2/3 '>
          <div>
            <img src={filteredHouse.imageLg} alt="" />
          </div>
          <div className='flex flex-row gap-5 '>
            <div className="flex flex-row gap-2">
              <BedIcon className='dropdown-icon-secondary' />
              <h2>{filteredHouse.bedrooms}</h2>
            </div>
            <div className="flex flex-row gap-2">
              <BathtubIcon className='dropdown-icon-secondary' />
              <h2>{filteredHouse.bathrooms}</h2>
            </div>
            <div className="flex flex-row gap-2">
              <AspectRatioIcon className='dropdown-icon-secondary' />
              <h2>{filteredHouse.surface}</h2>
            </div>
          </div>
          <div>
            <p>{filteredHouse.description}</p>
          </div>
        </div>
        <div className='flex flex-col gap-3 shadow pt-3 border border-gray-300 rounded pb-5 lg:w-1/3 lg:pb-0'>
          <form className='px-6 lg:pt-8'>
            <div className='flex flex-row gap-3 items-center pt-4 lg:pt-0'>
              {filteredHouse && filteredHouse.agent && (
                <div className='w-[80px] outline rounded-full p-1 outline-gray-400 outline-[2px] cursor-pointer'>
                  <img src={filteredHouse.agent.image} alt="" />
                </div>
              )}
              {filteredHouse && filteredHouse.agent && (
                <div className='flex flex-col gap-2 '>
                  <h1 className='font-bold text-xl'>{filteredHouse.agent.name}</h1>
                  <h3>View listning</h3>
                </div>
              )}
            </div>
            <div className='py-4'>
              <input type="text" className='w-full border border-gray-400 rounded outline-none py-2 px-5' required placeholder=' نام ونام خانوادگی *' />
            </div>
            <div className='py-4'>
              <input type="email" className='w-full border border-gray-400 rounded outline-none py-2 px-5' required placeholder='ایمیل  *' />
            </div>
            <div className='py-4'>
              <input type="text" className='w-full border border-gray-400 rounded outline-none py-2 px-5' required  placeholder='شماره تلفن *' />
            </div>
            <div className='py-4'>
              <textarea type="text" className='w-full border border-gray-400 rounded outline-none py-3 px-5 h-[150px] resize-none' required placeholder=' توضیحات *' ></textarea>
            </div>
            <div className='flex flex-row gap-3'>
              <div className='px-4 border-[2px] border-violet-400  h-[40px] rounded w-1/2 text-center text-violet-600 cursor-pointer active:scale-[0.9]'>
                <a href="tel:09354501795" type='submit'><button className='leading-[45px]' type='submit'>Call </button></a>
              </div>
              <div className='px-4 bg-violet-900 text-white h-[40px] rounded w-1/2 text-center cursor-pointer active:scale-[0.9]'>
                <button className='leading-[45px]' type='submit'>Send message</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
