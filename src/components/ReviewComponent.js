import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Rating, List } from 'semantic-ui-react';
const Reactions  = [
    'Worst Experience',
    'Aw Bad Enough',
    'Ok To a Extent',
    'Good',
    'Awesome'
];

export default class ReviewBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showResponse: false
        }
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onRateCb(event, dataObj) {
        const rating  = dataObj.rating;
        this.props.cb(rating);
    }

    onMouseEnter(event) {
        const target = event.target;
        const hoveredNumber = parseInt(target.getAttribute('aria-posinset'));
        this.setState({
            showResponse: true,
            hoveredNumber: hoveredNumber
        });
    }

    onMouseLeave() {
        this.setState({
            showResponse: false
        });
        console.log('mouseLeave');
    }

    render () {
        let reaction = null;
        if (this.state.showResponse && this.state.hoveredNumber) {
            reaction = (<div>
                            {Reactions[this.state.hoveredNumber-1]}
                       </div>);
        }
        return (<div className = "row">
                    <div className = "col-sm-5 Review-Labels">
                        {this.props.field}
                    </div>
                    <div className = "col-sm-7">
                        <Rating maxRating={5} defaultRating={0} icon='star' size='massive' onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onRate={(event, dataObj) => {console.log("Called");this.onRateCb(event, dataObj)}} />
                    </div>
                </div>);
    }
}

//offset-md-3