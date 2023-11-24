import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import blue from "../assets/img/blue.svg";

const MarketingPlan = () => {
  return (
    <div id="Start earning" className="bg_green pt-5 pb-5">
      <Container className=" pb-3">
        <Row className=" align-items-center justify-content-center">
          <Col lg={6} className=" position-relative">
            <div data-aos="fade-right">
              <img
                className=" position-absolute blue d-none d-lg-block"
                src={blue}
                alt=""
              />
              <p className=" fw_400 fs_15 ff_SpaceMono text-black mt-3">
                Get Your Custom Marketing Plan
              </p>
              <h2 className=" fs_40 fw_300 ff_MaisonNeue">
                Start earning more money now
              </h2>
            </div>
          </Col>
          <Col lg={5} className=" d-flex justify-content-center">
            <div data-aos="fade-left">
              <div className=" d-flex align-items-center  justify-content-between  input1 mt-4 mt-lg-0  ">
                <input
                  className="input "
                  type="text"
                  placeholder="Enter Your Website"
                />
                <button className=" submit_btn fw_600 fs_15 text-black ff_MaisonNeue">
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MarketingPlan;
