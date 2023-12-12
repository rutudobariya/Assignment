import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout />}> 
            <Route index element={<Home />} /> 
            <Route path='/about-us' element={<About />} />
            <Route path='/our-services' element={<Services />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
            
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
