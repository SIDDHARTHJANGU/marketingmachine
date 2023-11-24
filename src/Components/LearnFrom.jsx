import React from "react";
import { Learnm } from "./Mysvg";
import learnimgone from "../assets/img/learn_img1.png";
import { Col, Container, Row } from "react-bootstrap";
import learntwo from "../assets/img/learntwoimg.png";
import learnthree from "../assets/img/learmthreeimg.png";
import learnfour from "../assets/img/learnfourimg.png";
import usline from "../assets/img/us_line.png";
import learnoneimg from "../assets/img/learnoneimg.png";
import made from "../assets/img/Brand.png";
import from_line from "../assets/img/from_line.png";

const LearnFrom = () => {
  return (
    <div
      id="LEARN FROM"
      className=" pt-5 overflow-hidden position-relative pb-5"
    >
      <img
        className=" position-absolute from_line d-none d-sm-block"
        src={from_line}
        alt=""
      />
      <img className=" position-absolute usline z-3" src={usline} alt="img" />
      <Container className=" pt-lg-5">
        <div className=" text-center pb-5" data-aos="fade-down">
          <h2 className=" fw_700 fs_80 text-black text-uppercase ff_SöhneSchmal">
            Learn from us.
          </h2>
          <p className=" fw_400 fs_15 ff_MaisonNeue text-black">
            Digital marketing resources from Venveo to help you grow.
          </p>
          <button className=" Learn fw_600 fs_15 text-black ff_MaisonNeue mt-4">
            See All <Learnm />
          </button>
        </div>
        <div
          className=" position-relative d-none d-sm-block big_learn_card  "
          data-aos="zoom-in-up"
        >
          <img className=" position-absolute brand" src={made} alt="img" />
          <img
            className=" w-100 learnimgone  d-none d-sm-block"
            src={learnimgone}
            alt="img"
          />
          <img className=" w-100 d-sm-none" src={learnoneimg} alt="img" />
          <div className=" learncard position-absolute">
            <p className=" guide text-uppercase fw_400 fs_15  ff_Neue ">
              guides
            </p>
            <p className=" fw_300 fs_30 ff_MaisonNeue text-black mt-2">
              Marketing Contractor
              <span className=" d-block">and Installers:</span> The Ultimate
              Guide
            </p>
            <p className="  fw_400 fs_15 ff_MaisonNeue text-black mt-3">
              Understanding the process and{" "}
              <span className=" d-block">maximize the opportunities</span>
            </p>
            <button className=" Learn fw_600 fs_15 ff_MaisonNeue text-black mt-lg-5 mt-2">
              Read More <Learnm />
            </button>
          </div>
        </div>
      </Container>
      <Row className=" d-flex  pt-lg-5 mt-2 justify-content-center  ">
        <div className=" position-relative d-sm-none big_learn_card ">
          <img
            className=" w-100  d-none d-sm-block"
            src={learnimgone}
            alt="img"
          />
          <img className=" position-absolute brand" src={made} alt="img" />
          <img className=" w-100 d-sm-none" src={learnoneimg} alt="img" />
          <div className=" learncard position-absolute">
            <p className=" guide text-uppercase fw_400 fs_15  ff_Neue ">
              guides
            </p>
            <p className=" fw_300 fs_30 ff_MaisonNeue text-black mt-2">
              Marketing Contractor
              <span className=" d-block">and Installers:</span> The Ultimate
              Guide
            </p>
            <p className="  fw_400 fs_15 ff_MaisonNeue text-black mt-3">
              Understanding the process and{" "}
              <span className=" d-block">maximize the opportunities</span>
            </p>
            <button className=" Learn fw_600 fs_15 ff_MaisonNeue text-black mt-5">
              Read More <Learnm />
            </button>
          </div>
        </div>
        <Col lg={4} sm={6} className=" mt-4 mt-lg-0">
          <div
            className=" position-relative small_learn_card"
            data-aos="fade-down-right"
          >
            <img className=" w-100" src={learntwo} alt="img" />
            <div className=" learncardtwo position-absolute">
              <p className=" guide text-uppercase fw_400 fs_15  ff_Neue ">
                multi-channel marketing
              </p>
              <p className=" fw_300 fs_30 ff_MaisonNeue text-black mt-2">
                How to Get Your
                <span className=" d-block">Product into Lowe’s</span>
              </p>
              <p className="  fw_400 fs_15 ff_MaisonNeue text-black mt-3">
                Understanding the process and{" "}
                <span className=" d-block">maximize the opportunities</span>
              </p>
              <button className=" Learn fw_600 fs_15 ff_MaisonNeue text-black mt-lg-5 mt-2">
                Read More <Learnm />
              </button>
            </div>
          </div>
        </Col>
        <Col
          lg={4}
          sm={6}
          className=" d-flex justify-content-sm-end justify-content-lg-center mt-4 mt-lg-0 "
        >
          <div
            className=" position-relative w-100 small_learn_card"
            data-aos="fade-up"
          >
            <img className=" w-100 learnthree" src={learnthree} alt="img" />
            <div className=" learncardtwo position-absolute">
              <p className=" guide text-uppercase fw_400 fs_15  ff_Neue ">
                lead-gen
              </p>
              <p className=" fw_300 fs_30 ff_MaisonNeue text-black mt-2">
                Get Your Sales Team
                <span className=" d-block"> Digital Leads</span>
              </p>
              <p className="  fw_400 fs_15 ff_MaisonNeue text-black mt-3">
                Understanding the process and{" "}
                <span className=" d-block">maximize the opportunities</span>
              </p>
              <button className=" Learn fw_600 fs_15 ff_MaisonNeue text-black mt-lg-5 mt-2">
                Read More <Learnm />
              </button>
            </div>
          </div>
        </Col>
        <Col
          lg={4}
          sm={6}
          className=" d-flex justify-content-lg-end mt-4 mt-lg-0"
        >
          <div
            className=" position-relative w-100 small_learn_card"
            data-aos="fade-down-left"
          >
            <img className=" w-100" src={learnfour} alt="img" />
            <div className=" learncardtwo position-absolute">
              <p className=" guide text-uppercase fw_400 fs_15  ff_Neue ">
                ecommerce
              </p>
              <p className=" fw_300 fs_30 ff_MaisonNeue text-black mt-2">
                How to Sell building
                <span className=" d-block">Materials Online</span>
              </p>
              <p className="  fw_400 fs_15 ff_MaisonNeue text-black mt-3">
                Understanding the process and{" "}
                <span className=" d-block">maximize the opportunities</span>
              </p>
              <button className=" Learn fw_600 fs_15 ff_MaisonNeue text-black mt-lg-5 mt-2">
                Read More <Learnm />
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LearnFrom;
