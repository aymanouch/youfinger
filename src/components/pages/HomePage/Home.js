import React from 'react';
import HeroSection from '../../HeroSection';
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Date';
import Prodcuts from "../products/products";
import jump from 'jump.js';
const handleClick = () => {
    jump('.prouducts');
}
const handleClick2 = () => {
    jump('body');
}
function Home() {
    return (
        <>
            <HeroSection  info={homeObjOne} handleClick={handleClick}/>
            <Prodcuts />
            <HeroSection info={homeObjThree} handleClick={handleClick2}/>
            <HeroSection info={homeObjTwo}/>
            <HeroSection info={homeObjFour} callButton={true}/>
        </>
    )
}

export default Home;
