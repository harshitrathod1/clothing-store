import React from 'react'

import './logo-brand.styles.scss';

const Logo = () => {
    return(
        <div className='logo-container'>
            <img className='logo-img' 
            alt=''
            src={require('../../assets/online-shopping.png')}    
            />
        </div>
    )
}

export default Logo;

