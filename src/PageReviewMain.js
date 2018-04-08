import React, { Component } from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReviewBarComponent1 from './ReviewComponent1';
import LikeDislikeComponent from './likeDislike.js';
import { Segment } from 'semantic-ui-react';


export default class PageReviewMain extends Component {
    constructor (props) {
        super(props);
        this.state = {
            collegeName: '',
            major: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
    }

    handleNameInput (event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        console.log("name",value);
        this.setState({
            collegeName: value
        });
    }

    handleSubmit (event) {
        console.log("Submit Called");
    }

    getMajorList () {
        console.log("Major List");
        return(
            <div className="form-group row">
                    <label id="major" className="col-sm-3 col-sm-form-label"> Department / Major </label>
                    <div className = "col-sm-9">
                        <select className = "form-control" id = "major">
                            <option>ECE</option>
                            <option>CIVIL</option>
                            <option>MECH</option>
                        </select>
                    </div>
            </div>
        )
    }

    render () {
        const majorList = this.getMajorList();
        return (
            <div className="Page-review-holder">
                <div className = "container">
                    <form onSubmit = {this.handleSubmit}>
                        <Segment.Group  raised>
                            <Segment>
                                <div className="row">
                                    <label id="collageName" className="col-sm-3 col-sm-form-label "> College / University Name </label>
                                    <div className = "col-sm-6 search">
                                        <input type="text" id = "collageName" className = "form-control" value={this.state.collegeName} onChange={this.handleNameInput}/>
                                    </div>
                                </div>
                            </Segment>
                            <Segment  >
                                <ReviewBarComponent1 field = "Guidance in Getting Placed"/>
                            </Segment>
                            <Segment  >
                                <ReviewBarComponent1 field = "Quality of Teaching"/>
                            </Segment>
                            <Segment  >
                                <ReviewBarComponent1 field = "Labs and Other Facilities"/>
                            </Segment>
                            <Segment  >
                                <ReviewBarComponent1 field = "Overall Satisfaction in education provided"/>
                            </Segment>
                            <Segment  >
                                <LikeDislikeComponent field = "Would you recommend it ?"/>
                            </Segment>
                        </Segment.Group>    
                    </form>
                </div>
            </div>
        )
    }

    // render () {
    //     return (
    //
    //     )
    // }
}