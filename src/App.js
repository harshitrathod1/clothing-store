import React from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import setCurrentUser from './redux/user/user.actions';

class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    /* This method monitors auth changes and fireups a callback during 
      a initial load and when auth state or user changes.
      When no user is logged in then userAuth is null
    */
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        /* onSnapShot method runs on a document reference of userAuth object 
        and returns the snapShot or the actual data present in the document*/
        userRef.onSnapshot(snapShot => {
          setCurrentUser(
              {
                id : snapShot.id,
                ...snapShot.data()
              }
            );

          });
        }else{
          setCurrentUser(userAuth);
        }
    });
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
          <Route exact path="/shop" element={<ShopPage/>} />
          <Route exact path="/signin" element = {this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage/>}/>
        </Routes>
      </div>
    );
  }
  
}

const mapStateToProps = ({ user }) => {
  return({
    currentUser : user.currentUser
  })
};

const mapDispatchToProps = (dispatch) => {
  return({
    setCurrentUser : user => dispatch(setCurrentUser(user))
  })
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
