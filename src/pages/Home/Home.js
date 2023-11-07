import React from 'react'
import Navbar from '../../Components/Navbar';
import Container from '../../Components/Container'
import  DesignButton from '../../Components/DesignButton'
import SecondContaniner from '../../Components/SecondContaniner'
import Trending from '../../Components/Trending'
import Owards from '../../Components/Owards'
import Download from '../../Components/Download'
import Client from '../../Components/Client'
import Advertising from '../../Components/Advertising'
import Venture from "../../Components/Venture";


function Home() {
    return (
        <>
        <Navbar/>
        <Container/>
        <DesignButton/>
        <SecondContaniner/>
        <Trending/>
        <Owards/>
        <Download/>
        <Client/>
        <Advertising/>
        <Venture/>
      
        </>
      
        );
}

export default Home