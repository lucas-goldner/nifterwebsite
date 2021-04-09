import React from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="page-footer bg_color--3 pl--150 pr--150 pl_lp--70 pr_lp--70 pl_lg--70 pr_lg--70 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30">
      <div className="bk-footer-inner pt--150 pb--60 pt_md--90 pt_sm--90 pb_md--30 pb_sm--20">
        <Row>
          <Col lg={6}>
            <h2 className="heading heading-h2 text-white line-height-1-39">
              Need to talk <br /> to us?
            </h2>
          </Col>
        </Row>
      </div>

      <div className="copyright ptb--50">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <div className="copyright-left text-md-left text-center">
              <ul className="bk-copyright-menu d-flex bk-hover justify-content-center justify-content-md-start flex-wrap flex-sm-nowrap">
                <li>
                  <Link href={"/tos"}>Terms of Services</Link>
                </li>
                <li>
                  <Link href={"/privacy"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={"https://www.instagram.com/nft_metro/"}>
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <div className="bk-footer-widget menu--contact mt_md--30 mt_sm--30"></div>
          <Col xs={12} md={6}>
            <div className="copyright-right text-md-right text-center">
              <div className="footer-address">
                <p className="bk_pra text-white line-height-1-63 bk-hover">
                  <a
                    className="text-white"
                    href={"mailto:nftmetro.business@gmail.com"}
                  >
                    nftmetro.business@gmail.com
                  </a>
                </p>
              </div>
              <p>© {new Date().getFullYear()} Nifter. All Rights Reserved.</p>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
