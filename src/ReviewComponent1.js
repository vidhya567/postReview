import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Rating, List } from 'semantic-ui-react';
import reviewIcon1 from './icons/emojis/1_b.svg';
import reviewIcon2 from './icons/emojis/2.svg';
import reviewIcon3 from './icons/emojis/3.svg';
import reviewIcon4 from './icons/emojis/4_b.svg';
import reviewIcon5 from './icons/emojis/5.svg';

export default class ReviewBarComponent1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedReview : undefined,
            styles: [null,null,null,null,null]
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(reviewNumber) {
        console.log("handleSelected",reviewNumber);
        this.setState({
            selectedReview : reviewNumber
        },() => {
            this.addStyleForSelected();
        });
    }

    addStyleForSelected() {
        let styles = [null,null,null,null,null] ;
        const selectedReview = this.state.selectedReview;
        const selectedDivStyle = {'height': '45px'};
        if (selectedReview >= 1 && selectedReview <= 5) {
            styles[selectedReview-1] = selectedDivStyle;
        }
        this.setState({
            styles: styles
        });
    }

    render () {
        return (

        <div className = "row">
            <div className = "col-sm-3">
                {this.props.field}
            </div>
            <div className = "col-sm-3" onClick={() => this.handleSelect(1)} >
                <Rating maxRating={5} defaultRating={0} icon='star' size='massive' />
            </div>
            <div className = "col-sm-6">
                {/*Mock selection Response Idiot*/}
            </div>
        </div>
        );
    }
}

// {/*<List horizontal>*/}
// {/*<List.Item>*/}
// {/*<List.Content as='a' floated='left'>*/}
// {/*{this.props.field}*/}
// {/*</List.Content>*/}
// {/*</List.Item>*/}
// {/*<List.Item>*/}
// {/*<Rating maxRating={5} defaultRating={0} icon='star' size='massive' />*/}
// {/*</List.Item>*/}
// {/*<List.Item>*/}
// {/*<List.Content>*/}
// {/*<List.Header>Mock Selection Response List</List.Header>*/}
// {/*</List.Content>*/}
// {/*</List.Item>*/}
// {/*</List>*/}