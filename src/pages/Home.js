import React, { useContext } from 'react';
import Banner from '../components/Banner';
import Search from '../components/Search';
import House from '../components/House';
import houstList from '../components/HouseContext';


const Home = () => {
  // const houseDate = useContext(houstList);
  
  return (
    <div>
      <Banner />
      <Search  />
      <House  />
    </div>
  );
};

export default Home;
