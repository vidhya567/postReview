import React, { Component } from 'react';
import { Header, Image, Segment, Menu, Modal, Button } from 'semantic-ui-react';


export default class SchoolInfoBox extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const userSpecificSection = this.renderUserSpecificSection();
        return(
            <div className={"container"}>
                <div className={"row"}>
                    <Segment>
                        <div className={"row"}>
                            <div className={"col-6"}>

                            </div>
                        </div>
                    </Segment>
                </div>
            </div>
        );
    }
}