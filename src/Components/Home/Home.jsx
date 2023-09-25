import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Carousel from './Carousel';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
      <div>
          <Header></Header>
            <Carousel> </Carousel>
            
            <Outlet></Outlet>
          
            <Footer></Footer>
      </div>
    
    );
};

export default Home;