import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} </title>
                    <meta name="description" content="NFT Metro Website." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
