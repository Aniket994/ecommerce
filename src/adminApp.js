import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';

import Dashboard from './admin/dashboard';
import Myorder from './admin/order';
import Myproduct from './admin/product';

function AdminApp() {
  return (
    <>
<HashRouter>
      <Routes>
        
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/product" element={<Myproduct/>}/>
        <Route exact path="/order" element={<Myorder/>}/>
      </Routes>
</HashRouter>
    </>
  );
}

export default AdminApp;
