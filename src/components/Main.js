import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {Route, Routes, Navigate} from 'react-router-dom';
import './css/style.css';
import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';

const Main = () => {
    const [show, Display] = useState(false);
        const Clicked = (e) => {
            console.log('clicked');
            Display(!show);
        }
    return (
        <>
            <div className="main">
            <Nav show={show}/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/service' element={<Service />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/*' element={<Navigate to='/' />}/>
            </Routes> 
            <div className="hamburger">
                    <GiHamburgerMenu onClick={Clicked} />
                </div>
            </div>
        </>
    );
}

export default Main;
