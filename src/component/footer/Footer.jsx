import React, { Component } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialShare = [
  // {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
  // {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
  { Social: <FaInstagram />, link: "https://www.instagram.com/nft_metro/" },
  { Social: <FaTwitter />, link: "https://twitter.com/NFT_Metro" },
];
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer-area">
          <div className="footer-wrapper">
            <div className="row align-items-end row--0">
              <div className="col-lg-6">
                <div className="footer-left">
                  <div className="inner">
                    <span>Enter the NFT world</span>
                    <h2>
                      Join <br /> NFT Metro
                    </h2>
                    <div
                      id="downloads"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: 350,
                      }}
                    >
                      <a
                        className="rn-button-style--2"
                        rel="noopener noreferrer"
                        href="https://appstoreconnect.apple.com/apps/1558245894/appstore/ios/version/inflight"
                      >
                        <span>Download App Store</span>
                      </a>
                      <a
                        className="rn-button-style--2"
                        rel="noopener noreferrer"
                        href="https://play.google.com/store/apps/details?id=com.nifter"
                      >
                        <span>Download Play Store</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-right" data-black-overlay="6">
                  <div className="row">
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="footer-link">
                        <h4>Quick Link</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="/portfolio">Home</a>
                          </li>
                          <li>
                            <a href="/services">Terms of Service</a>
                          </li>
                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="footer-link">
                        <h4>Say Hello</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="mailto:admin@example.com">
                              nftmetro.business@gmail.com
                            </a>
                          </li>
                        </ul>

                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <a href={`${val.link}`}>{val.Social}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className="col-lg-12">
                      <div className="copyright-text">
                        <p>Copyright © 2020 NFT Metro. All Rights Reserved.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;
