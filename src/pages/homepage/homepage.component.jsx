import React from 'react';
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component.jsx';
import { HomePageContainer } from './homepage.styles';

const HomePage = () =>{

    return (
        <HomePageContainer>
            <Directory/>
        </HomePageContainer>
    );
} 
export default HomePage;