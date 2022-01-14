import React from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component'
import CheckoutPage from './pages/checkout/checkout.component';
import PageNotFound from './pages/404notFound/pageNotFound.component';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount() {
      const { checkUserSession } = this.props;
      checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/shop/*" element={<ShopPage/>} />
          <Route exact path="/signin" element = {this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage/>}/>
          <Route exact path="/checkout" element = { <CheckoutPage/> }/>
          <Route path="*" element={ <PageNotFound/> }/>
        </Routes>
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
   currentUser : selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession : () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
