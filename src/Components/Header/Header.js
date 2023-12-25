import React from 'react';
import img from "../Assets/logo.png"
import {Link} from "react-router-dom";
const Header = () => {
    return (
       <header>
           <div className={'logo'}>
               <img src={img} alt='logo'/>
           </div>
           <div className={'nav-link'}>
               <Link className={'link'} to={'/'}>Home<i className='bx bx-home'></i></Link>
               <Link className={'link'} to={'/search'}>Search <i className='bx bx-search-alt-2'></i></Link>
           </div>
       </header>
    );
};

export default Header;