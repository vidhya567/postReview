import React, { Component } from 'react';
import { Header, Image, Segment, Menu, Modal, Button } from 'semantic-ui-react';
import univLogo from '../../icons/university.svg';
import SignInScreen from '../../components/FirebaseSignInComponent';

export default class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openSignInModal: false
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleButtonClick()  {
        this.setState({
            openSignInModal: true
        });
    }

    handleClose() {
        this.setState({
            openSignInModal: false
        });
    }

    renderSignInPopUp () {
        const {userSignedIn, userSignedOut} = this.props;
        return (
            <div>
                <Button size='medium' positive onClick={this.handleButtonClick}>Sign In</Button>
                <Modal  open={this.state.openSignInModal} onClose={this.handleClose} size='tiny'>
                    <Modal.Header>Please Sign In</Modal.Header>
                    <Modal.Content>
                        <SignInScreen referrer="header" sucessCb={this.handleClose} userSignedIn={userSignedIn} userSignedOut={userSignedOut}  />
                    </Modal.Content>
                </Modal>
            </div>);
    }


    renderSignedInUserProfile () {
        const userInfo = this.props.appState.userInfo;
        return (<Menu.Item>
                    <Image avatar src={userInfo.photoURL} />
                    {userInfo.displayName}
                </Menu.Item>)
    }

    renderUserSpecificSection () {
        const appState = this.props.appState;
        if (appState && appState.userSignedIn) {
            return this.renderSignedInUserProfile();
        } else {
            return this.renderSignInPopUp();
        }
    }

    render() {
        const userSpecificSection = this.renderUserSpecificSection();
        return(
            <div className="New-Header">
                <div className="Header-Wrapper">
                    <Header className="Header-Style" as='h2'>
                        <div className='Left-Header'>
                            <span>Nyanotaya</span>
                            <img src={univLogo} className='Header-Logo' alt="logo" />
                        </div>
                        <div className='Right-Header'>
                            {userSpecificSection}
                        </div>
                    </Header>
                </div>
            </div>
        );
    }
}