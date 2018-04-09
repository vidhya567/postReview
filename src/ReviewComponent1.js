import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Rating, List } from 'semantic-ui-react';

export default class ReviewBarComponent1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedReview : undefined,
            styles: [null,null,null,null,null]
        }
    }

    onRateCb(event, dataObj) {
        console.log("event",event.target);
        console.log("event value", event.target ? event.target.value: undefined);
        console.log("DATA",dataObj);
        const rating  = dataObj.rating;
        this.props.cb(rating);
    }

    onMouseEnter(event, dataObj) {
        const target = event.target;
        console.log("mouse enter event",target);
        // console.log("event value", event.target ? event.target.value: undefined);
        console.log("mouse enter DATA",target.getAttribute('aria-posinset'));
    }

    render () {
        return (

        <div className = "row">
            <div className = "col-sm-3">
                {this.props.field}
            </div>
            <div className = "col-sm-3">
                <Rating maxRating={5} defaultRating={0} icon='star' size='massive' onMouseOver={(event, dataObj) => {console.log("MOuseOver");this.onMouseEnter(event, dataObj)}} onRate={(event, dataObj) => {console.log("Called");this.onRateCb(event, dataObj)}} />
            </div>
            <div className = "col-sm-6">
                {/*Mock selection Response Idiot*/}
            </div>
        </div>
        );
    }
}
