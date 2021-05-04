import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiCast />,
    title: "Inexpensive",
    description:
      "Create, transfer, withdraw your NFTs, none of these actions costs more than 10 Dollars.",
  },
  {
    icon: <FiLayers />,
    title: "Fast",
    description: "Transactions between our users are nearly instant.",
  },
  {
    icon: <FiUsers />,
    title: "Simple",
    description:
      "A clean User Interface allows users to focus on the important things.",
  },
  {
    icon: <FiMonitor />,
    title: "Mobile",
    description:
      "Availability for iOS and Android allow you to take your NFTs everywhere you go.",
  },
];

class ServiceTwo extends Component {
  render() {
    let title = "Services",
      description =
        "To give our customers the biggest value possible we compiled a number of features, that we think beats everything else on the market.";
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
              <h2 className="title">{title}</h2>
              <p>{description}</p>
              <div className="service-btn">
                <a className="btn-transparent rn-btn-dark" href="#downloads">
                  <span className="text">Download App</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-12 mt_md--50">
            <div className="row service-one-wrapper">
              {ServiceList.map((val, i) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                  <a>
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceTwo;
