import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import tabonevideo from "../assets/video/tab-one.mp4";
import tabtowvideo from "../assets/video/earth.mp4";
// import tabtowimg from "../assets/img/tabtwoimg.png";
import tabthreevideo from "../assets/video/globle.mp4";
// import tabthreeimg from "../assets/img/tabthreeimg.png";
import secsixline from "../assets/img/sexsixline.png";
import { Arrow, Ipsum, Range } from "./Mysvg";
import man from "../assets/img/man.png";
import map from "../assets/img/map.png";
import home from "../assets/img/Home.png";
import AIA from "../assets/img/AIA.png";
import Lowe from "../assets/img/Lowes.png";
import build from "../assets/img/Buitl.png";
import houzz from "../assets/img/Houzz.png";
import yello from "../assets/img/yellow-card.png";
import platone from "../assets/img/platone.png";
import globetwo from "../assets/img/globetwo.png";
import battlethree from "../assets/img/battlethree.png";
import ratefour from "../assets/img/ratefour.png";
import Slider from "react-slick";
const TheGrowth = () => {
  const sliderone = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
  };
  return (
    <div id="GROWTH PARTNER" className=" pt-lg-5 pb-lg-5 position-relative  ">
      <img
        className=" position-absolute secsixline z-n1 "
        src={secsixline}
        alt="img"
      />
      <Container className=" mt-5 pb-5 ">
        <div className=" text-center" data-aos="fade-down">
          <h2 className=" fw_700 fs_80 text-uppercase text-black ff_SöhneSchmal ">
            The growth partner
          </h2>
          <p className=" fw_300 fs_30 text-black ff_MaisonNeue">
            you’ve been looking for.
          </p>
          <p className=" fw_400 fs_15 ff_MaisonNeue text-black mt-lg-5 mt-3">
            Businesses trust Venveo to power grow.
          </p>
        </div>
        <div className=" pt-lg-5 mt-3 ">
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-5"
          >
            <Tab eventKey="home" title=" Industry Expertise">
              <div className=" position-relative  ">
                <video
                  className=" w-100 h-100 z-n1 position-absolute object-fit-cover  "
                  loop
                  muted
                  autoPlay
                  src={tabonevideo}
                ></video>
                <div className=" card_smart ">
                  <Row className=" d-flex justify-content-around   align-items-center px-3 pt-xl-5 pb-xl-5  ">
                    <Col lg={4} sm={6} className=" text-center text-sm-start">
                      <p className=" text-uppercase fw_700 fs-80 text-white ff_SöhneSchmal lin_high pb-4 ">
                        the smartest{" "}
                        <span className=" d-lg-block">minds in the</span>{" "}
                        industry
                      </p>
                      <p className=" fw_300 fs_30 text-white ff_MaisonNeue">
                        Answer our questions and{" "}
                        <span className=" d-lg-block">
                          listen to our answers.
                        </span>
                      </p>
                      <p className=" fw_400 fs_15 text-white ff_MaisonNeue mt-3">
                        This is placeholder but can add more{" "}
                        <span className=" d-lg-block">
                          {" "}
                          the business of building, some epic
                        </span>{" "}
                        <span className=" d-lg-block">
                          {" "}
                          fails (and how to avoid them) and
                        </span>{" "}
                        everything building science.
                      </p>
                      <button className=" Subscribe_btn fw_500 fs_15 text-white ff_MaisonNeue mt-5">
                        <Range /> Subscribe to Podcast{" "}
                        <span className=" fs_10">▼</span>
                      </button>
                    </Col>
                    <Col
                      lg={2}
                      sm={6}
                      className=" d-flex flex-column justify-content-center align-items-center  gap-5 pt-5 pb-5 "
                    >
                      <img className=" hone" src={home} alt="img" />
                      <img className="AIA" src={AIA} alt="img" />
                      <img className="Lowe" src={Lowe} alt="img" />
                      <img className="build" src={build} alt="img" />
                      <img className="houzz" src={houzz} alt="img" />
                    </Col>
                    <Col lg={4}>
                      <Slider {...sliderone}>
                        <div>
                          <img className=" w-100" src={man} alt="img" />
                        </div>
                        <div>
                          <img className=" w-100" src={man} alt="img" />
                        </div>
                        <div>
                          <img className=" w-100" src={man} alt="img" />
                        </div>
                      </Slider>
                    </Col>
                  </Row>
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="ROI Focused">
              <div className=" position-relative pb-5 mb-5   ">
                <video
                  className=" w-100 h-100 position-absolute object-fit-cover z-n1 "
                  loop
                  muted
                  autoPlay
                  src={tabtowvideo}
                ></video>
                <div className="  z-3  ">
                  <div className=" px-5 pt-2">
                    <p className=" fw_700 fs_80 ff_SöhneSchmal text-white">
                      Proven Results
                    </p>
                    <p className=" fw_300 fs_30 ff_MaisonNeue text-white">
                      Not hopes and prayers.
                    </p>
                  </div>
                  <div className="pt-5 ">
                    <img
                      className=" yello pt-5  mt-5   "
                      src={yello}
                      alt="img"
                    />
                    <img
                      className=" platone position-absolute  "
                      src={platone}
                      alt="img"
                    />
                    <img
                      className=" globetwo position-absolute  "
                      src={globetwo}
                      alt="img"
                    />
                    <img
                      className=" battlethree position-absolute  "
                      src={battlethree}
                      alt="img"
                    />
                    <img
                      className=" ratefour position-absolute  "
                      src={ratefour}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact" title="Proprietary Technology">
              <div className=" position-relative ">
                <video
                  className=" w-100 h-100 z-n1 position-absolute object-fit-cover  "
                  loop
                  muted
                  autoPlay
                  src={tabthreevideo}
                ></video>
                <div className=" card_smart ">
                  <Row className=" d-flex justify-content-around align-items-center  px-3  ">
                    <Col xl={5} md={6} className=" text-center text-sm-start ">
                      <p className=" text-uppercase fw_700 fs_80 text-white ff_SöhneSchmal lin_high pb-lg-4 ">
                        Project radar
                      </p>
                      <div className=" pb-5 mb-5">
                        <Ipsum />
                      </div>
                      <p className=" fw_300 fs_30 text-white ff_MaisonNeue">
                        Lorem ipsum what this{" "}
                        <span className=" d-lg-block">
                          product actually does.
                        </span>
                      </p>
                      <p className=" fw_400 fs_15 text-white ff_MaisonNeue mt-lg-3 pb-lg-3">
                        This is placeholder but can add more{" "}
                        <span className=" d-lg-block">
                          {" "}
                          the business of building, some epic
                        </span>{" "}
                        <span className=" d-lg-block">
                          {" "}
                          fails (and how to avoid them) and
                        </span>{" "}
                        everything building science.
                      </p>
                      <button className=" call_btn fw_500 fs_15 text-black ff_MaisonNeue mt-5 ">
                        Call to Action Somewhere <Arrow />{" "}
                      </button>
                    </Col>
                    <Col xl={5} lg={6} className=" mt-5 mt-lg-0">
                      <Slider {...sliderone}>
                        <div>
                          <img className=" w-100 " src={map} alt="img" />
                        </div>
                        <div>
                          <img className=" w-100 " src={map} alt="img" />
                        </div>
                        <div>
                          <img className=" w-100 " src={map} alt="img" />
                        </div>
                        <div>
                          <img className=" w-100 " src={map} alt="img" />
                        </div>
                      </Slider>
                    </Col>
                  </Row>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default TheGrowth;
