import React, { Component } from "react"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import "./config/fbconfig"
import Header from "./Header"


class Login extends Component {
  constructor() {
    super()
    this.state = {
      isSignedIn: false,
      picture: '',
      displayName: '',
      uid: ''
    }

  }



  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }



  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user !== null) {
        this.setState({ isSignedIn: true,
           picture: user.photoURL,
            uid: user.uid,
             displayName: user.displayName })
             ;
             this.props.history.replace('/Main')      }


    })
  }
  sigout = () => {
    this.setState({ isSignedIn: false })
  }



  render() {
    return (
      <div className="App">
 {this.state.isSignedIn ? (<Header data={this.state} signOut={this.sigout} /> ) : (<StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}  />


)}
      </div>
    )
  }
}

export default Login