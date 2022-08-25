import React from 'react';
import Blog from './Blog/Blog';
import Doctors from './Doctors/Doctors';
import FactArea from './FactArea/FactArea';
import Address from './Hero/Address/Address';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
           <Hero></Hero> 
           <Address></Address>
           <Doctors></Doctors>
           <FactArea></FactArea>
           <Blog></Blog>
        </div>
    );
};

export default Home;