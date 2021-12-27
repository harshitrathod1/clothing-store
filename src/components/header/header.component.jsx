import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => {
    return(
        <div className='header'>
            <Link className= 'logo-container' to="/">
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {currentUser ? (
                        <div className='option' onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                    ) : (
                        <Link className='option' to='/signin'>
                            SIGN IN
                        </Link>
                    )
                }
            </div>
        </div>
    );
}

/* To get the value of currentUser from the root reducer function 
    This function return the data from the store that particular
    component needs
*/
const mapStateToProps = (state) => ({
    currentUser : state.user.currentUser
})

/* Connect is a higher order function which takes two functional args i.e. 
mapStateToProps,Component */

export default connect(mapStateToProps)(Header);
