import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Rating, List } from 'semantic-ui-react';
const Reactions  = [
    'Worst Experience',
    'Aw Bad Enough',
    'Ok To a Extent',
    'Good',
    'Awesome'
];

export default class ReviewBarComponent1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show
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
        const reviewNumber = parseInt(event.target.getAttribute('aria-posinset'));
        console.log("mouse enter DATA", reviewNumber);
    }

    onMouseLeave(event) {

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
