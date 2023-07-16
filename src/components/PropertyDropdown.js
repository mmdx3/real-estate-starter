import React, { useContext, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Menu } from '@headlessui/react';
import { houseList } from './HouseContext';
const PropertyDropdown = () => {
  const { Property, setProperty, Properties } = useContext(houseList);
  const [isOpen, setisOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative  '>
      <Menu.Button
        onClick={() => setisOpen(!isOpen)}
        className='dropdown-btn w-full text-left'>

        <HomeIcon className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{Property}</div>
          <div className='text-[13px]'>Select your place</div>
        </div>

        {
          isOpen ? <KeyboardArrowUpIcon className='dropdown-icon-secondary' />
            : <KeyboardArrowDownIcon className='dropdown-icon-secondary' />
        }
      </Menu.Button>
      <Menu.Items className='dropdown-menu' >
        {Properties.map((Properti, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(Properti)}
              key={index} as='li'
              className='cursor-pointer hover:text-violet-700 transition ' >
              {Properti}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
