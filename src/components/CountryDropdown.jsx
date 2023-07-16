import React, { useContext,  useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Menu } from '@headlessui/react';
import { houseList } from './HouseContext';
const CountryDropdown = () => {
  const { country, setCountry, Countries } = useContext(houseList);
  const [isOpen, setisOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative  '>
      <Menu.Button
        onClick={() => setisOpen(!isOpen)}
        className='dropdown-btn w-full text-left'>

        <LocationOnIcon className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{country}</div>
          <div className='text-[13px]'>Select your place</div>
        </div>

        {
          isOpen ? <KeyboardArrowUpIcon className='dropdown-icon-secondary' /> 
          : <KeyboardArrowDownIcon className='dropdown-icon-secondary' />
        }
      </Menu.Button>
      <Menu.Items className='dropdown-menu' >
        {Countries.map((country, index) => {
          return (
            <Menu.Item
              onClick={() => setCountry(country)}
              key={index} as='li'
              className='cursor-pointer hover:text-violet-700 transition ' >
              {country}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
