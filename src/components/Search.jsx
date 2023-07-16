import React, { useContext } from 'react';
import CountryDropdown from './CountryDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import SearchIcon from '@mui/icons-material/Search';
import PropertyDropdown from './PropertyDropdown';
import { houseList } from './HouseContext';
const Search = () => {
  const { HandleClicke } = useContext(houseList) ;

  return (
    <div className='container  mx-auto xl:px-20 py-8'>
      <div className=' flex max-xl:flex-col  gap-2 items-center'>
        <CountryDropdown />
        <PropertyDropdown />
        <PriceRangeDropdown />
        <div onClick={()=> HandleClicke()} className='bg-violet-700 w-full p-[17px] text-center rounded-md px-16 text-white cursor-pointer active:bg-violet-800 hover:bg-violet-800  active:scale-[0.9] transition-all duration-[0.3s] delay-0 xl:w-auto'>
          <SearchIcon />
        </div>
      </div>
    </div>
  )


    ;
};

export default Search;
