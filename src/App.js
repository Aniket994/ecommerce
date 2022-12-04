import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';

import Myhome from './users/home';
import MyCart from './users/cart';
import MyLogin from './users/login';

function App() {
  return (
    <>
<HashRouter>
      <Routes>
        
        <Route exact path="/" element={<Myhome/>}/>
        <Route exact path="/login" element={<MyLogin/>}/>
        <Route exact path="/cart" element={<MyCart/>}/>
      </Routes>
</HashRouter>
    </>
  );
}

export default App;
