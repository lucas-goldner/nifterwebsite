import React, { Component } from "react";

const ServiceList = [
    {
        icon: '02',
        title: 'NFT Creator',
        description: 'Create your own ERC-721 NFTs for 5-10x less than OpenSea.'
    },
    {
        icon: '02',
        title: 'NFT Display',
        description: 'Have your NFTs always in your hand. It doesnt matter if they are stored on OpenSea, Rarible or with us.'
    },
    {
        icon: '02',
        title: 'NFT Community',
        description: 'Add your friends and enjoy their individual NFT collections, they can also see your collection.'
    },
]

class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    <img src={`/assets/images/icons/icon-${val.icon}.png`} alt="Digital Agency"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;