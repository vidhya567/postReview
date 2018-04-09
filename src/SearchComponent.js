import React, { Component } from 'react';
import { Search, Label, Header } from 'semantic-ui-react'

export default class SearchComponent extends Component {
    constructor (props) {
        super(props);
        this.handleResultSelect = this.handleResultSelect.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.state = {
            value: '',
            results: {}
        }
    }

    handleResultSelect (e, { result })  {
        console.log("e value", e, result);
        this.setState({ value: result.instituteName });
    }

    handleSearchChange (e, { value })  {
        console.log("e value", e, value);
        this.setState({ value });
        const searchUrl = 'http://ec2-18-188-166-186.us-east-2.compute.amazonaws.com:8900/schools/search?searchTerm='+value;
        fetch(searchUrl).then((response) => {
            return response.json();
        }).then((data) => {
            console.log("DATA RECEIVED",data);
            this.setState({
                results: data
            })
        }).catch((error) => {
            console.log("ERROR",error);
        })
    }

    resultRenderer (data) {
        return <Label content={data.instituteName}/>
    }

    render() {
        const { value, results } = this.state;

        return (
                <Search
                    fluid={true}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={this.handleSearchChange}
                    results={results}
                    value={value}
                    size='small'
                    {...this.props}
                    resultRenderer={this.resultRenderer}
                />
        )
    }
}