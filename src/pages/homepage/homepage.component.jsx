import React from 'react';
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component.jsx';
import { Link } from 'react-router-dom';

const HomePage = () =>{

    return (
        <div className='homepage'>
            <Link to='/hats'>Hats</Link>
            <Directory/>
        </div>
    );
} 
export default HomePage;