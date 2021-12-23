import React from 'react';
import './menu-item.styles.scss'
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ title, imageUrl,size,linkUrl }) => {
    let navigate = useNavigate();
    return (
    <div className= {` ${size} menu-item`}>
        <div
            style={{ 
            backgroundImage : `url(${imageUrl})`
            }}
            className='background-image'
        />
        <div className= 'content' onClick = { () => navigate(linkUrl) } >
            <h1 className= 'title'>{ title.toUpperCase() }</h1>
            <span className= 'subtitle'>SHOP NOW</span>
        </div>
    </div>
    )
};

export default MenuItem;