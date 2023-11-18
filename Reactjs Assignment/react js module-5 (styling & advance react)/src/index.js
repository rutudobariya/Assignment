import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import "../src/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/fontawesome-4.7/css/font-awesome.css";
import TaskbarApp from './components/Taskbar';
import HeaderApp from './components/Header';
import NavbarApp from './components/Navbar';
import SliderApp from './components/Slider';
import SlicksliderApp from './components/Slickslider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskbarApp />
    <HeaderApp />
    <NavbarApp/>
    <SliderApp />
    <SlicksliderApp/>
  </React.StrictMode>
);

reportWebVitals();
