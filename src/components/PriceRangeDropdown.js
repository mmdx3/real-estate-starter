import PriceChangeIcon from '@mui/icons-material/PriceChange';
import React, { useContext, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Menu } from '@headlessui/react';
import { houseList } from './HouseContext';
const PriceDropdown = () => {
  const { Price, setPrice} = useContext(houseList);
  const [isOpen, setisOpen] = useState(false);
  const Prices = [
    {
      value : 'Price range (any)',
    },
    {
      value : '100000 - 130000',
    },
    {
      value : '140000 - 170000',
    },
    {
      value : '170000 - 200000',
    },
    {
      value : '200000 - 300000',
    },
    {
      value : '300000 - 400000',
    },
  ]
  return (
    <Menu as='div' className='dropdown relative  '>
      <Menu.Button
        onClick={() => setisOpen(!isOpen)}
        className='dropdown-btn w-full text-left'>

        <PriceChangeIcon className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{Price}</div>
          <div className='text-[13px]'>Choose Price Range  </div>
        </div>

        {
          isOpen ? <KeyboardArrowUpIcon className='dropdown-icon-secondary' />
            : <KeyboardArrowDownIcon className='dropdown-icon-secondary' />
        }
      </Menu.Button>
      <Menu.Items className='dropdown-menu' >
        {Prices.map((Price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(Price.value)}
              key={index} as='li'
              className='cursor-pointer hover:text-violet-700 transition ' >
              {Price.value}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceDropdown;
