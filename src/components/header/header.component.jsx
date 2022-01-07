import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
//import Logo from '../logo-brand/logo-brand.component';
import { selectCardHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

import { HeaderContainer,LogoContainer,OptionsContainer,OptionLink } from './header.styles';


const Header = ({ currentUser,hidden }) => {
    return(
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/contact'>
                    CONTACT
                </OptionLink>
                {currentUser ? (
                        <OptionLink as='div' onClick={() => auth.signOut()}>
                            SIGN OUT
                        </OptionLink>
                    ) : (
                        <OptionLink to='/signin'>
                            SIGN IN
                        </OptionLink>
                    )
                }
                <CartIcon/>   
            </OptionsContainer>
            {hidden ? null : <CartDropdown />}
        </HeaderContainer>
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
