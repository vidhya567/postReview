import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import reviewIcon1 from './icons/emojis/1_b.svg';
import reviewIcon2 from './icons/emojis/2.svg';
import reviewIcon3 from './icons/emojis/3.svg';
import reviewIcon4 from './icons/emojis/4_b.svg';
import reviewIcon5 from './icons/emojis/5.svg';

export default class ReviewBarComponent extends Component {
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
            <div className = "Review-Bar-Wrapper">
              <div className = "row">
                  <div className = "col-3">
                      {this.props.field}
                  </div>
                  <div className = "col-1" onClick={() => this.handleSelect(1)} >
                      <img src={reviewIcon1} className="Review-icon" style={this.state.styles[0]}/>
                  </div>
                  <div className = "col-1" onClick={() => this.handleSelect(2)}>
                      <img src={reviewIcon2} className="Review-icon" style={this.state.styles[1]}/>
                  </div>
                  <div className = "col-1" onClick={() => this.handleSelect(3)}>
                      <img src={reviewIcon3} className="Review-icon" style={this.state.styles[2]}/>
                  </div>
                  <div className = "col-1" onClick={() => this.handleSelect(4)}>
                      <img src={reviewIcon4} className="Review-icon" style={this.state.styles[3]}/>
                  </div>
                  <div className = "col-1" onClick={() => this.handleSelect(5)}>
                      <img src={reviewIcon5} className="Review-icon" style={this.state.styles[4]}/>
                  </div>
                  <div className = "col-4">
                      Mock selection Response Idiot
                  </div>
              </div>
          </div>
        );
    }
}
