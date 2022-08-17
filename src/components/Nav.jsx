import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
const Nav = ({show}) => {
  return (
    <>
       <div className="main_nav">
                    <div className="nav">
                        <div className='logo'>
                            <p>FizaAkbar</p>
                        </div>
                        <div>
                            <div className={show ? 'mobile_links' : 'links'}>
                                <div className="links_div">
                                    <div> <NavLink to='/'>Home</NavLink></div>
                                    <div> <NavLink to='/about'>About</NavLink></div>
                                    <div> <NavLink to='/service'>Service</NavLink></div>
                                    <div> <NavLink to='/contact'>Contact</NavLink></div>
                                </div>
                            </div>
                        </div>

                        <div className='icons'>
                            <FaFacebookSquare style={{ marginLeft: '30px', color: 'rgb(47, 86, 160)', cursor:'pointer' }} />
                            <FaInstagramSquare style={{ marginLeft: '30px', color: 'rgb(180, 95, 180)', cursor:'pointer' }} />
                            <FaYoutubeSquare style={{ marginLeft: '30px', color: 'red', cursor:'pointer' }} />
                        </div>
                    </div>
                </div>
    </>
  );
}

export default Nav;
