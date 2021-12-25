import React from 'react';
import { Routes,Route } from 'react-router-dom';

import './App.css';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
 
class App extends React.Component{
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    /* This method monitors auth changes and fireups a callback during 
      a initial load and when auth state or user changes.
      When no user is logged in then user is null
    */
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/shop" element={<ShopPage/>} />
          <Route exact path="/signin" element={<SignInAndSignUpPage/>} />
        </Routes>
      </div>
    );
  }
  
}

export default App;
