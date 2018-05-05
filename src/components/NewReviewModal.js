import React, { Component } from 'react';
import '../App.css';
import ReviewBarComponent from './ReviewComponent';
import LikeDislikeComponent from './likeDislike.js';
import { Segment } from 'semantic-ui-react';
import SearchComponent from './SearchComponent';
import SubmitComponent from './SubmitComponent';
import {userSignedIn} from "../actions";


export default class PageReviewMain extends Component {
    constructor (props) {
        super(props);
    }

    getRatingsFromApp () {
        const appState = this.props.appState;
        if (appState) {
            return {
                placementRating: appState.placementRating,
                teachingRating: appState.teachingRating,
                facilityRating: appState.facilityRating,
                sportsRating: appState.sportsRating,
                overallRating: appState.overallRating,
                recommendation: appState.recommendation
            }
        }
        return {};
    }

    getSchoolData () {
        const appState = this.props.appState;
        if (appState && appState['schoolData']) {
            return appState['schoolData'];
        }
        return null;
    }

    getSignedIn () {
        return this.props.appState['userSignedIn'];
    }

    getUserInfo () {
        return this.props.appState['userInfo'];
    }

    render () {
        const {setSchool, setPlacementRating, setTeachingRating, setFacilitiesRating, setSportsRating, setOverallRating, setRecommendation, userSignedIn, userSignedOut}= this.props;
        const submitStyle = {'textAlign': 'left'};
        const ratings = this.getRatingsFromApp();
        const schoolData = this.getSchoolData();
        const signedIn = this.getSignedIn();
        const userInfo = this.getUserInfo();
        return (
            <div className="Review-Modal-Wrapper">
                <div className = "container">
                    <div className="row">
                        <Segment.Group  raised>
                            <Segment>
                                <div className="row">
                                    <label id="collageName" className="col-sm-3 col-sm-form-label Review-Labels">Name of College /University</label>
                                    <div className = "col-sm-9">
                                        <SearchComponent cb={setSchool} />
                                    </div>
                                </div>
                            </Segment>
                            <Segment  >
                                <ReviewBarComponent cb={setPlacementRating} field = "Guidance in Getting Placed"/>
                            </Segment>
                            <Segment  >
                                <ReviewBarComponent cb={setTeachingRating} field = "Quality of Teaching"/>
                            </Segment>
                            <Segment  >
                                <ReviewBarComponent cb={setFacilitiesRating} field = "Labs and Other Facilities"/>
                            </Segment>
                            <Segment  >
                                <ReviewBarComponent cb={setSportsRating} field = "Importance for Sports"/>
                            </Segment>
                            <Segment  >
                                <ReviewBarComponent cb={setOverallRating} field = "Overall Satisfaction"/>
                            </Segment>
                            <Segment  >
                                <LikeDislikeComponent cb={setRecommendation} field = "Would you recommend it ?"/>
                            </Segment>
                            <Segment style={submitStyle}>
                                <SubmitComponent
                                    ratings={ratings}
                                    schoolData={schoolData}
                                    userSignedIn={userSignedIn}
                                    userSignedOut={userSignedOut}
                                    signedIn={signedIn}
                                    userInfo={userInfo}
                                />
                            </Segment>
                        </Segment.Group>
                    </div>
                </div>
            </div>
        )
    }

}