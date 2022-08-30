import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,
         Routes,
         Route,
       } from 'react-router-dom';
import './index.css';
import App from './App';
// import Expenses from "./routes/expenses";
import About from "./routes/about";
import ArtDesign from './routes/artdesign';
import UxUiWork from './routes/uxui';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/" element={<About />} />
    <Route path="/ArtDesign" element={<ArtDesign />} />
    <Route path="/UxUiWork" element={<UxUiWork />} />
  </Routes>
</BrowserRouter>
);


