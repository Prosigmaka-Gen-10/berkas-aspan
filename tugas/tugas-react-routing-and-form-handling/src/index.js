import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Home from './pages/Home';
import Elektronik from './pages/Elektronik';
import Handphone from './pages/Elektronik/Handphone';
import ListHp from './pages/Elektronik/Handphone/ListHp';
import DetailProduk from './pages/DetailProduk';
import ListLaptop from './pages/Elektronik/Laptop/ListLaptop';
import Laptop from './pages/Elektronik/Laptop';
import FormHandling from './pages/FormHandling';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="form-handling" element={<FormHandling />} />
          <Route path='elektronik' element={<Elektronik />} >
            <Route path='handphone' element={<Handphone />} >
              <Route path='list-hp' element={<ListHp />} />
              <Route path='list-hp/detail-produk/:namaproduk' element={<DetailProduk />} />
            </Route>
            <Route path='laptop' element={<Laptop />} >
              <Route path='list-laptop' element={<ListLaptop />} />
              <Route path='detail-produk/:namaproduk' element={<DetailProduk />} />
            </Route>
          </Route>

        </Route>
        {/* </Route> */}
        {/* </Route> */}


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
