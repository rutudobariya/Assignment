import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const Layout = () =>
{
    return(
        <> 
            <nav className='navbar' >
                <ul align="center">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About</Link></li>
                    <li><Link to="/our-services">Services</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/contact-us">Contact</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
export default Layout;