import React, { Component } from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import SignInScreen from './FirebaseSignInComponent';
import axios from 'axios';
import * as FirestoreUtil from '../util/FirestoreUtil';


export default class SubmitComponent extends Component {
    state = { open: false }
    handleButtonClick()  {
        this.setState({
           open: true
        })
    }

    handleClose() {
        this.setState({
            open: false
        })
    }

    onSucessSignInCB(user, ratings, schoolData) {
            console.log("Hey We got The CB TO WORK", user, ratings);
            const userId = user.uid;
            this.postReviewToDB(userId, ratings, schoolData);
    }

    postReviewToDB(userId, ratings, schoolData) {
        // if (userId && ratings) {
        //     axios.post('post-review',{
        //         userId : userId,
        //         ratings: ratings
        //     }).then((response) => {
        //         console.log("Got Response for Post Review", response);
        //     }).catch((err) => {
        //         console.log("Err For Post Review", response);
        //     });
        // }
        FirestoreUtil.addReviewToReviewsCollection(userId, ratings, schoolData).then((docRef) => {
            FirestoreUtil.addReviewToUsersCollection(userId, ratings, docRef.id, schoolData.schoolID);
        })

    }


    render() {
        const open = this.state.open;
        const {ratings,schoolData} = this.props;
        return (
            <div>
                {/*<Button size='medium'   basic color='green'>Post Publicly</Button>*/}
                {/*<Modal  open={open} onClose={() => this.handleClose}>*/}
                    {/*<SignInScreen/>*/}
                {/*</Modal>*/}
                <Modal trigger={<Button size='medium'   positive>Post Anonymously</Button>} size='tiny'>
                    <Modal.Header>Please Sign In</Modal.Header>
                    <Modal.Content>
                        <SignInScreen ratings={ratings} schoolData={schoolData} sucessCb = {this.onSucessSignInCB}/>
                    </Modal.Content>
                </Modal>
            </div>);
    }
}