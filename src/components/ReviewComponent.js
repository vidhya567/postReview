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
            showResponse: false
        }
    }

    onRateCb() {
        const rating  = dataObj.rating;
        this.props.cb(rating);
    }

    onMouseEnter() {
        this.setState({
            showResponse: true
        });
    }

    onMouseLeave() {
        this.setState({
            showResponse: true
        });
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
