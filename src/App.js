import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header';
import PropertyDetails from './pages/PropertyDetails'
import Footer from './components/Footer';
import { useContext, useRef, useState } from 'react';
import { houseList } from './components/HouseContext';
import Skeleton from 'react-loading-skeleton';
import { Avatar, Typography } from '@mui/material';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/propertyDetails/:id',
    element: <PropertyDetails />
  }
]);
const App = () => {
  return (
    <div className='bg-white container mx-auto px-0 shdow-app '>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
