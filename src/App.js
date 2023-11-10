import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import MainContainer from './pages/Digital/MainContainer';
import Hotstar from './pages/hotstar/Hotstar';
import DiwaliGift from './pages/gift/DiwaliGift';
import MoreGift from './pages/moregift/MoreGift';
import Product from './pages/product/Product';
import VisitingCard from './pages/visiting/VisitingCard';
import VisitingMore from './pages/vistingcard/VisitingMore'
import Quotation from './pages/quatation/Quotation'





function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/main' element={<MainContainer/>} />
          <Route path='/Hot' element={<Hotstar/>}/>
          <Route path='/gifts' element={<DiwaliGift/>}/>
          <Route path='/more' element ={<MoreGift/>} />
          <Route path='/product' element ={<Product/>} />
          <Route path='/quot' element ={<Quotation/>} />
          <Route path='/visit' element ={<VisitingCard/>} />
          <Route path='/visiting' element ={<VisitingMore/>} />
         
        </Routes>
      </Router>
    </>
  );
}

export default App;
