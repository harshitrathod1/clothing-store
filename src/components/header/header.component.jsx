import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
//import Logo from '../logo-brand/logo-brand.component';
import { selectCardHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ({ currentUser,hidden }) => {
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
                <CartIcon/>   
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    );
}

/* To get the value of currentUser from the root reducer function 
    This function return the data from the store that particular
    component needs
*/
const mapStateToProps = (state) => ({
    currentUser : selectCurrentUser(state),
    hidden : selectCardHidden(state)
})

/* 
another way to write above function

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCardHidden
    }) 

*/

/* Connect is a higher order function which takes two functional args i.e. 
mapStateToProps,Component */

export default connect(mapStateToProps)(Header);
