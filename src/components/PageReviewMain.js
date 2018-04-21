import React, { Component } from 'react';
import './App.css';
import ReviewBarComponent from './ReviewComponent';
import LikeDislikeComponent from './likeDislike.js';
import { Segment } from 'semantic-ui-react';
import SearchComponent from './SearchComponent';
import SubmitComponent from './SubmitComponent';


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

    render () {
        const {setSchool, setPlacementRating, setTeachingRating, setFacilitiesRating, setSportsRating, setOverallRating, setRecommendation}= this.props;
        const submitStyle = {'textAlign': 'left'};
        const ratings = this.getRatingsFromApp();
        const schoolData = this.getSchoolData();
        return (
            <div className="Page-review-holder">
                <div className = "container">
                        <Segment.Group  raised>
                            <Segment>
                                <div className="row">
                                    <label id="collageName" className="col-sm-3 col-sm-form-label ">Name of College /University</label>
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
                                <ReviewBarComponent cb={setOverallRating} field = "Overall Satisfaction in education provided"/>
                            </Segment>
                            <Segment  >
                                <LikeDislikeComponent cb={setRecommendation} field = "Would you recommend it ?"/>
                            </Segment>
                            <Segment style={submitStyle}>
                                <SubmitComponent ratings={ratings} schoolData={schoolData}/>
                            </Segment>
                        </Segment.Group>
                </div>
            </div>
        )
    }

}