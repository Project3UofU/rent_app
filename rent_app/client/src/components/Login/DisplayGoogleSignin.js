import React, { Component } from 'react'
// import gBtn_normal from './google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'
// import gBtn_focus from './google_signin_buttons/web/1x/btn_google_signin_dark_focus_web.png'
import { GoogleLogin } from 'react-google-login'

class DisplayGoogleSignin extends React.Component{
 
    constructor (props, context) {
      super(props, context);
    }
   
    responseGoogle (googleUser) {
      var id_token = googleUser.getAuthResponse().id_token;
      var googleId = googleUser.getId();
      
      console.log({ googleId });
      console.log({accessToken: id_token});
      //anything else you want to do(save to localStorage)...
    }
   
    render () {
      return (
        <div>
          <GoogleLogin socialId="219707160907-4r611gihi5j1h9d1537k4jru8nu1ppee.apps.googleusercontent.com"
                       className="google-login"
                       scope="profile"
                       fetchBasicProfile={false}
                       responseHandler={this.responseGoogle}
                       buttonText="Login With Google"/>
        </div>
      );
    }
   
  }
   
  export default DisplayGoogleSignin;
