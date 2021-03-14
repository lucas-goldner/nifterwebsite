import React from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Widget from "./babyComponents/Widget";
import socials from "../data/socials";

const Footer = () => {
  return (
    <footer className="page-footer bg_color--3 pl--150 pr--150 pl_lp--70 pr_lp--70 pl_lg--70 pr_lg--70 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30">
      <div className="bk-footer-inner pt--150 pb--60 pt_md--90 pt_sm--90 pb_md--30 pb_sm--20">
        <Row>
          <Col lg={6}>
            <h2 className="heading heading-h2 text-white line-height-1-39">
              Start working on a <br /> new project?
            </h2>
          </Col>

          <Col lg={6} xl={{ span: 5, offset: 1 }}>
            <div className="bk-footer-widget menu--contact mt_md--30 mt_sm--30">
              <Widget wrapClasses="menu--contact" title="Contact us">
                <div className="footer-address">
                  <Row>
                    <Col sm={6} lg={7}>
                      <p className="bk_pra text-white line-height-1-63">
                        2005 Stokes Isle Apt. 896, <br /> Venaville 10010, USA
                      </p>

                      <div className="social-share social--transparent text-white">
                        {socials.map((social) => (
                          <a
                            key={social.id}
                            href={`https://${social.media}.com/${social.username}`}
                          >
                            <i className={`fa fa-${social.media}`} />
                          </a>
                        ))}
                      </div>
                    </Col>

                    <Col sm={6} lg={5} className="mt_mobile--30">
                      <p className="bk_pra text-white line-height-1-63 bk-hover">
                        <a
                          className="text-white"
                          href={`${
                            process.env.PUBLIC_URL +
                            "mailto:info@yourdomain.com"
                          }`}
                        >
                          info@yourdomain.com
                        </a>
                      </p>
                      <p className="bk_pra text-white line-height-1-63 bk-hover">
                        <a
                          className="text-white"
                          href={`${
                            process.env.PUBLIC_URL + "tel:0068120034509"
                          }`}
                        >
                          (+68)120034509
                        </a>
                      </p>
                    </Col>
                  </Row>
                </div>
              </Widget>
            </div>
          </Col>
        </Row>
      </div>

      <div className="copyright ptb--50">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <div className="copyright-left text-md-left text-center">
              <ul className="bk-copyright-menu d-flex bk-hover justify-content-center justify-content-md-start flex-wrap flex-sm-nowrap">
                <li>
                  <Link href={process.env.PUBLIC_URL + "/blog"}>Our blog</Link>
                </li>
                <li>
                  <Link href={process.env.PUBLIC_URL + "/portfolio"}>
                    Latest projects
                  </Link>
                </li>
                <li>
                  <Link href={process.env.PUBLIC_URL + "/contact"}>
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="copyright-right text-md-right text-center">
              <p>© {new Date().getFullYear()} Brook. All Rights Reserved.</p>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
