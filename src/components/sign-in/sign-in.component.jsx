import React, { useState } from "react";
import "./sign-in.styles.scss";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { googleSignInStart,emailSignInStart } from "../../redux/user/user.actions";

const SignIn = (props) => {
  const [ userCredentials, setCredentials ] = useState({ email : '', password : ''});
    
  const { email, password } = userCredentials;
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = props;
    emailSignInStart(email,password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({...userCredentials,  [name]: value });
  };

  const { googleSignInStart } = props;

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          label="password"
          onChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart : (email,password) => dispatch(emailSignInStart({ email, password }))
  })
}

export default connect(null,mapDispatchToProps)(SignIn);
