import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import univLogo from '../../icons/university.svg';

export default class HeaderComponent extends Component {

    render() {
        return(
            <div className="New-Header">
            <div className="Header-Wrapper">
                <Header className="Header-Style" as='h2'>
                    <div className='Left-Header'>
                        <span>Nyanotaya</span>
                        <img src={univLogo} className='Header-Logo' alt="logo" />
                    </div>
                    <div className='Right-Header'>
                        <Image avatar src='https://lh4.googleusercontent.com/-Q4nefLu2aW0/AAAAAAAAAAI/AAAAAAAAABI/-ZNKbNdOsew/photo.jpg' />
                        {' '}Vidhya Sagar
                    </div>
                </Header>
            </div>
            </div>
        );
    }
}