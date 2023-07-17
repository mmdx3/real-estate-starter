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
  const { loadingPage , houses} = useContext(houseList);
  if (loadingPage) {
    return (
      <>
        <div className="containerr">
          <svg width="100%" height="100" viewBox="-1 -1 22 22">
            <path style={{ '--order': 7 }} className="eight e-8" />
            <path style={{ '--order': 6 }} className="eight e-7" />
            <path style={{ '--order': 5 }} className="eight e-6" />
            <path style={{ '--order': 4 }} className="eight e-5" />
            <path style={{ '--order': 3 }} className="eight e-4" />
            <path style={{ '--order': 2 }} className="eight e-3" />
            <path style={{ '--order': 1 }} className="eight e-2" />
            <path style={{ '--order': 0 }} className="eight e-1" />
          </svg>
        </div>
      </>
    )
  }


  return (
    <div className='bg-white container mx-auto px-0 shdow-app'>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
