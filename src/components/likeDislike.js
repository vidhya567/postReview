import React, { Component } from 'react';
import like1 from '../icons/likes/like1.svg';
import like2 from '../icons/likes/like2.svg';
import dislike1 from '../icons/likes/dislike1.svg';
import dislike2 from '../icons/likes/dislike2.svg';


export default class LikeDislikeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: undefined
        }
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
    }

    handleLike() {
        this.setState({
            liked: true
        }, () => {
            this.props.cb(this.state.liked);
        })

    }

    handleDislike() {
        this.setState({
            liked: false
        }, () => {
            this.props.cb(this.state.liked);
        })

    }

    render() {
         const like = this.state.liked === true ? like2:like1;
         const dislike = this.state.liked === false ? dislike2:dislike1;
         return (
            <div className = "Like-Bar-Wrapper">
                <div className = "row">
                    <div className = "col-sm-3 Review-Labels">
                        {this.props.field}
                    </div>
                    <div className = "col-sm-3">
                        <div className = " like-mobile row">
                            <div className = "col-6" onClick={() => this.handleLike()} >
                                <img src={like} className="Review-icon" alt="like"/>
                            </div>
                            <div className = "col-6" onClick={() => this.handleDislike()}>
                                <img src={dislike} className="Review-icon" alt="dislike"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}