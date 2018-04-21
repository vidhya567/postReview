// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';


export default class SignInScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: false
        }
    }

    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {
        const {sucessCb, ratings, schoolData} = this.props;
        console.log("props",sucessCb, ratings, schoolData);
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => {
                console.log("State Change", user);
                this.setState({isSignedIn: !!user},() => {
                    if (!!this.state.isSignedIn) {
                        if (sucessCb) {
                            sucessCb(user, ratings, schoolData);
                        }
                    }
                });
        });
    }

    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    getUiConfig () {
        // Configure FirebaseUI.
        const uiConfig = {
            // Popup signin flow rather than redirect flow.
            signInFlow: 'popup',
            // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.

            // We will display Google and Facebook as auth providers.
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID
            ],
            callbacks: {
                signInSuccess: () => false
            }
        };
        return uiConfig;
    }


    render() {
        const uiConfig = this.getUiConfig();
        return (
            <div>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
        );
    }
}