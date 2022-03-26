import React, { Component } from "react";
import firebase from 'firebase/compat/app';

import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import firebaseConfig from "./FireBase";

export class OTP extends Component {
    
    
    componentDidMount(){
        firebase.initializeApp(firebaseConfig);
    
        const uiConfig = {
            signInOptions: [{
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                recaptchaParameters :{
                    type: 'image',
                    size: 'normal',
                    badge: 'bottomleft'
                },
                defaultCountry: 'IN'
            }],
            callbacks: {
                signInSucessWithAuthResult: function(authResult, redirectUrl){
                    alert('User is Verified');
                    return true;
                }
            },
            signInSuccessUrl: "/booking"
        };
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start("#firebaseui-auth-container",uiConfig);
    };


    render(){
        return (
            <div id='firebaseui-auth-container'>

            </div>
        )
    }
}