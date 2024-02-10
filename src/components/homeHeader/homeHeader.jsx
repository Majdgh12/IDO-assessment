import React from 'react';
import logo from '../../asset/Logo.png'
import search from "../../asset/Search.png"
import add from "../../asset/Add.png"
import circle from '../../asset/Circle.png'

import '../homeHeader/homeHeader.css'
const HomeHeader = ({addSamira}) => {
    return (
        <div className='HomeHeader'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="other">
                <div className="search">
                    <input type="text" name="search" placeholder='What are you looking for?' id="" />
                    <img src={search} alt="" /></div>
                <div className="add" onClick={addSamira} >
                    <img src={add} alt="" />
                    <img src={circle} alt="" />
                </div>
                <div className="profile">
                    <img src={circle} alt="" />
                </div>

            </div>

        </div>
    );
}

export default HomeHeader;
