import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {App, Contact, About, Bye} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} >
        <Route path='bye' element={<Bye />} />
      </Route>
      <Route path='/con' element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
