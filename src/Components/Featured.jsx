import React from "react";
import { Container } from "react-bootstrap";
import Wsj from "../assets/img/WSJ.png";
import Enter from "../assets/img/Enterper.png";
import Fortunr from "../assets/img/Fortunr.png";
import Forbes from "../assets/img/Forbes.png";
import Inc from "../assets/img/Inc.png";
import Slider from "react-slick";
import featueline from "../assets/img/featueline.png";

const Featured = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 0,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="Featured in" className=" mt-5 pt-lg-3 pb-lg-5 position-relative">
      <Container className=" pb-4">
        <div data-aos="fade-down">
          <h2 className="fw_400 fs_15  ff_MaisonNeue text-black text-center">
            Featured in
          </h2>
        </div>

        <div className="pt-5 px-5 pb-5" data-aos="fade-down">
          <Slider {...settings}>
            <div className=" d-flex justify-content-center">
              <img className=" wsj" src={Wsj} alt="img" />
            </div>
            <div className=" d-flex justify-content-center">
              <img className=" wsj" src={Enter} alt="img" />
            </div>
            <div className=" d-flex justify-content-center">
              <img className=" wsj" src={Fortunr} alt="img" />
            </div>
            <div className=" d-flex justify-content-center">
              <img className=" wsj" src={Forbes} alt="img" />
            </div>
            <div className=" d-flex justify-content-center">
              <img className=" wsj" src={Inc} alt="img" />
            </div>
          </Slider>
        </div>
      </Container>
      <div>
        <img
          className=" featueline position-absolute"
          src={featueline}
          alt="img"
        />
      </div>
    </div>
  );
};

export default Featured;
