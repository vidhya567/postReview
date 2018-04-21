import React, { Component } from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import SignInScreen from './FirebaseSignInComponent';
import axios from 'axios';
import * as FirestoreUtil from '../util/FirestoreUtil';


export default class SubmitComponent extends Component {
    state = { openSignInModal: false }
    handleButtonClick()  {
        // Validation Should Be Done Here
        if (this.props.signedIn && this.props.userInfo) {
            const userId = this.props.userInfo;
            const {ratings,schoolData} = this.props;
            this.postReviewToDB(userId, ratings, schoolData);
        } else {
            this.setState({
                openSignInModal: true
            })
        }
    }

    handleClose() {
        this.setState({
            openSignInModal: false
        })
    }


    postReviewToDB(userId, ratings, schoolData) {
        FirestoreUtil.addReviewToReviewsCollection(userId, ratings, schoolData).then((docRef) => {
            FirestoreUtil.addReviewToUsersCollection(userId, ratings, docRef.id, schoolData.schoolID);
        })
    }


    render() {
        const openSignInModal = this.state.openSignInModal;
        const {ratings,schoolData, userSignedIn, userSignedOut, signedIn, userInfo} = this.props;
        return (
            <div>
                <Button size='medium'   positive onClick={this.handleButtonClick}>Post Anonymously</Button>
                <Button size='medium'   basic color='green' onClick={this.handleButtonClick}>Post Publicly</Button>
                <Modal  open={openSignInModal} onClose={() => this.handleClose} size='tiny'>
                    <Modal.Header>Please Sign In</Modal.Header>
                    <Modal.Content>
                        <SignInScreen ratings={ratings} schoolData={schoolData} sucessCb = {this.postReviewToDB} userSignedIn={userSignedIn} userSignedOut={userSignedOut} signedIn={signedIn} userInfo={userInfo}/>
                    </Modal.Content>
                </Modal>
            </div>);
    }
}