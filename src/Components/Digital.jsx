import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Cpl, Lead, Sales, Trafic } from "./Mysvg";
import digitalline from "../assets/img/digital_line.png";
import icon from "../assets/img/icon.png";

export const Digital = () => {
  return (
    <div id="DIGITAL MARKETING" className=" pt-xl-5 pb-xl-5 position-relative">
      <img
        className=" position-absolute digitalline z-n1"
        src={digitalline}
        alt=""
      />
      <Container className=" pb-xl-5">
        <div className=" text-center" data-aos="fade-down">
          <p className=" fs_30 fw_300 ff_MaisonNeue text-black">
            Problems we solve.
          </p>
          <h2 className=" text-uppercase fw_700 fs_80 ff_SöhneSchmal text-black digital">
            Digital Marketing{" "}
            <span className=" d-block">for today’s Business</span>
          </h2>
          <p className=" fw_400 fs_15 ff_MaisonNeue text-black mt-3">
            We help companies scale their strategies across multiple channels{" "}
            <span className=" d-lg-block">
              {" "}
              to drive more revenue, more quickly, without cutting corners.
            </span>
          </p>
        </div>
        <Row className="  d-flex justify-content-evenly pt-lg-5 mt-4 z-3">
          <Col lg={6} className=" d-flex justify-content-center ">
            <div className="sec4_card " data-aos="fade-down-right">
              <div className=" d-sm-flex py-sm-5 px-sm-4 px-2 py-3 ">
                <div>
                  <Trafic />
                </div>
                <div className=" px-sm-4 px-2">
                  <p className=" fw_300 fs_30 ff_MaisonNeue text-black  line_hight">
                    My website isn’t{" "}
                    <span className=" d-block">getting enough traffic</span>
                  </p>
                  <p className=" fw_400 fs_15 text-black ff_MaisonNeue mt-3">
                    Without consistent site traffic, you’re missing out on
                    valuable visitors, leads, and revenue. Thankfully, custom
                    SEO solutions can get you back on track by boosting your
                    presence in search engine results, so more people can find
                    and visit your site.
                  </p>
                  <ul className=" mt-4 mx-4">
                    <li className=" fw_600 fs_15 ff_MaisonNeue text-black">
                      Boost your presence in search results
                    </li>
                    <li className=" fw_600 fs_15 ff_MaisonNeue text-black">
                      Capture targeted site traffic
                    </li>
                    <li className=" fw_600 fs_15 ff_MaisonNeue text-black">
                      Turn site visitors into customers
                    </li>
                  </ul>
                  <button className=" Explore_btn fs_15    fw_600 ff_MaisonNeue text-black mt-5 gap-2 ">
                    Explore SEO Services
                    <img src={icon} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className=" d-flex justify-content-center mt-4 mt-lg-0">
            <div className="sec4_card " data-aos="fade-down-left">
              <div className=" d-sm-flex py-sm-5 px-sm-4 px-2 py-3">
                <div>
                  <Cpl />
                </div>
                <div className=" px-sm-4 px-2">
                  <p className=" fw_300 fs_30 ff_MaisonNeue text-black  line_hight">
                    My CPL from digital ad{" "}
                    <span className=" d-block">campaigns is too high</span>
                  </p>
                  <p className=" fw_400 fs_15 text-black ff_MaisonNeue mt-3">
                    Without consistent site traffic, you’re missing out on
                    valuable visitors, leads, and revenue. Thankfully, custom
                    SEO solutions can get you back on track by boosting your
                    presence in search engine results, so more people can find
                    and visit your site.
                  </p>
                  <ul className=" mt-4  mx-4">
                    <li className=" fw_600 fs_15 ff_MaisonNeue text-black">
                      Refine ad targeting
                    </li>
                    <li className=" fw_600 fs_15 ff_MaisonNeue text-black">
                      Engage your audience browse online{" "}
                    </li>
                    <li className=" fw_600 fs_15 ff_MaisonNeue text-black">
                      Maximize paid ad budget
                    </li>
                  </ul>
                  <button className=" Explore_btn fs_15    fw_600 ff_MaisonNeue text-black mt-5 gap-2 ">
                    Explore SEO Services
                    <img src={icon} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className=" d-flex justify-content-evenly pt-lg-5 pt-4 pb-5 ">
          <Col lg={6} className=" d-flex justify-content-center ">
            <div className="sec4_card " data-aos="fade-down-right">
              <div className=" d-sm-flex py-sm-5 px-sm-4 px-2 py-3">
                <div>
                  <Lead />
                </div>
                <div className=" px-sm-4 px-2">
                  <p className=" fw_300 fs_30 ff_MaisonNeue text-black  line_hight">
                    My website isn’t{" "}
                    <span className=" d-block">generating enough</span>
                  </p>
                  <p className=" fw_400 fs_15 text-black ff_MaisonNeue mt-3">
                    Without consistent site traffic, you’re missing out on
                    valuable visitors, leads, and revenue. Thankfully, custom
                    SEO solutions can get you back on track by boosting your
                    presence in search engine results, so more people can find
                    and visit your site.
                  </p>
                  <ul className=" mt-4  mx-4">
                    <li className=" fw_600 fs_15 ff_MaisonNeue text-black">
                      Fill up your lead pipeline
                    </li>
                    <li className=" fw_600 fs_15 ff_MaisonNeue text-black">
                      Reach your most valuable audience
                    </li>
                    <li className=" fw_600 fs_15 ff_MaisonNeue text-black">
                      Turn site visitors into customers
                    </li>
                  </ul>
                  <button className=" Explore_btn fs_15    fw_600 ff_MaisonNeue text-black mt-5 gap-2 ">
                    Explore SEO Services
                    <img src={icon} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className=" d-flex justify-content-center mt-4 mt-lg-0">
            <div className="sec4_card " data-aos="fade-down-left">
              <div className=" d-sm-flex py-sm-5 px-sm-4 px-2 py-3">
                <div>
                  <Sales />
                </div>
                <div className=" px-sm-4 px-2">
                  <p className=" fw_300 fs_30 ff_MaisonNeue text-black  line_hight">
                    My marketing and sales{" "}
                    <span className=" d-block"> data is disconnected</span>
                  </p>
                  <p className=" fw_400 fs_15 text-black ff_MaisonNeue mt-3">
                    Without consistent site traffic, you’re missing out on
                    valuable visitors, leads, and revenue. Thankfully, custom
                    SEO solutions can get you back on track by boosting your
                    presence in search engine results, so more people can find
                    and visit your site.
                  </p>
                  <ul className=" mt-4  mx-4">
                    <li className=" fw_600 fs_15 ff_MaisonNeue text-black">
                      Unify sales and marketing data
                    </li>
                    <li className=" fw_600 fs_15 ff_MaisonNeue text-black">
                      Prioritize leads with data-backed insights
                    </li>
                    <li className=" fw_600 fs_15 ff_MaisonNeue text-black">
                      Turn opportunities into closed deals
                    </li>
                  </ul>
                  <button className=" Explore_btn fs_15 fw_600 ff_MaisonNeue text-black mt-5 gap-2 ">
                    Explore SEO Services
                    <img src={icon} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
