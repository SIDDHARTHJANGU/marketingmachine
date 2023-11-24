import React from "react";
import {} from "react-bootstrap";
import Slider from "react-slick";
import Grant from "../assets/img/grant-img.png";
import jone from "../assets/img/Jon-Vaughan-Testimonial.png";
import Michel from "../assets/img/michal-img.png";
import { Jones } from "./Mysvg";
import slider_btnL from "../assets/img/slideer_leftbtn.png";
import slider_btnR from "../assets/img/slider_rightbtn.png";
import playbtn from "../assets/img/play_btn.png";

const ActualBusinesses = () => {
  // const slider = React.useRef(null);
  const setslider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="Actual businesses" className=" Actualresult_bg pt-lg-5 pb-lg-5">
      <div className=" text-center  pt-5" data-aos="fade-down">
        <h2 className=" fw_300 fs_30  ff_MaisonNeue text-white">
          Actual businesses.{" "}
          <span className=" d-block fw_700 fs_80 text-uppercase ff_SöhneSchmal lin_high">
            {" "}
            Actual results.
          </span>
        </h2>
        <p className=" fw_400 fs_15 ff_MaisonNeue text-white mt-lg-5 pt-3">
          Businesses trust Venveo to power grow.
        </p>
      </div>
      <div className=" align-items-center mt-lg-5 pt-4 position-relative ">
        <img
          onClick={() => setslider?.current?.slickPrev()}
          className=" position-absolute slider_btnL"
          src={slider_btnL}
          alt="img"
        />
        <img
          onClick={() => setslider?.current?.slickNext()}
          className=" position-absolute slider_btnR"
          src={slider_btnR}
          alt="img"
        />

        <Slider ref={setslider} {...setslider} className=" setslider">
          <div className=" d-flex justify-content-center slider-card position-relative">
            <img
              className=" position-absolute z-1 play_Btn"
              src={playbtn}
              alt=""
            />
            <img className=" width z-n1" src={Grant} alt="img" />
          </div>
          <div className=" d-flex justify-content-center slider-card position-relative">
            <img
              className=" position-absolute z-1 play_Btn"
              src={playbtn}
              alt=""
            />
            <img className=" width" src={jone} alt="img" />
          </div>
          <div className=" d-flex justify-content-center slider-card position-relative">
            <img
              className=" position-absolute z-1 play_Btn"
              src={playbtn}
              alt=""
            />
            <img className=" width" src={Michel} alt="img" />
          </div>
        </Slider>
      </div>
      <div className=" text-center mt-5 pt-3 pb-5" data-aos="fade-up">
        <p className=" fw_300 fs_30 ff_MaisonNeue text-white">
          “They are really aligned with how we are{" "}
          <span className=" d-lg-block">
            building the business from a strategic
          </span>{" "}
          <span className=" d-lg-block">
            {" "}
            standpoint and from branding, messaging
          </span>{" "}
          and cultural standpoint.”
        </p>
        <p className=" fw_400 fs_15 ff_MaisonNeue text-white mt-4">
          Jon Vaughan,{" "}
          <span className=" dplg-block">REGIONAL VP-SE AT US LBM</span>
        </p>
        <div className=" mt-3">
          <Jones />
        </div>
      </div>
    </div>
  );
};

export default ActualBusinesses;
