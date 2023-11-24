import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Arrow, Search } from "./Mysvg";
import vertorright from "../assets/img/VectorRight.png";
import vertorleft from "../assets/img/VectorLeft.png";
import green from "../assets/img/hero_squiggle.png";
import herovideo from "../assets/video/hero_video.mp4";
import menu from "../assets/img/menu.svg";
import close from "../assets/img/close.svg";
import made from "../assets/img/Brand.png";
import heroline from "../assets/img/header_line.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const Myheader = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [show, setshow] = useState(false);
  if (show === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  const Movement = () => {
    setshow(false);
  };
  return (
    <div className="hero_bcg min_vh_100 d-flex flex-column position-relative z-1 pb-5">
      <img
        className=" position-absolute right w-25 h_60  z-n1 "
        src={vertorright}
        alt="#"
      />
      <img className=" position-absolute left z-n1" src={vertorleft} alt="#" />
      <nav className=" d-flex justify-content-end">
        <ul
          className={`${
            show ? "show" : "hide"
          } d-flex align-items-center gap-5 bg_white nav_ul`}
        >
          <li className="nav  fw_500 fs-15 text-black ff_Neue ms-lg-3">
            <DropdownButton
              id="dropdown-basic-button"
              className=" "
              title="How We Help "
            >
              <Dropdown.Item href="#Featured in" onClick={Movement}>
                Featured in
              </Dropdown.Item>
              <Dropdown.Item href="#SATISFIED CLIENTS" onClick={Movement}>
                Satisfied Clients
              </Dropdown.Item>
              <Dropdown.Item href="#DIGITAL MARKETING" onClick={Movement}>
                Digital Marketing
              </Dropdown.Item>
            </DropdownButton>
          </li>
          <li className="nav  fw_500 fs-15 text-black ff_Neue ">
            <DropdownButton
              id="dropdown-basic-button"
              className=" "
              title="Who We Help  "
            >
              <Dropdown.Item href="#Start earning" onClick={Movement}>
                Start earning
              </Dropdown.Item>
              <Dropdown.Item href="#GROWTH PARTNER" onClick={Movement}>
                Growth Partner
              </Dropdown.Item>
              <Dropdown.Item href="#Actual businesses" onClick={Movement}>
                Actual businesses
              </Dropdown.Item>
            </DropdownButton>
          </li>
          <li className="nav  fw_500 fs-15 text-black ff_Neue">
            <DropdownButton
              id="dropdown-basic-button"
              className=" fs_16 fw_500 ff_Neue text-white  z-1"
              title="Why Venveo  "
            >
              <Dropdown.Item href="#LEARN FROM" onClick={Movement}>
                Learn From
              </Dropdown.Item>
              <Dropdown.Item href="#Ready" onClick={Movement}>
                Ready
              </Dropdown.Item>
              <Dropdown.Item href="#About" onClick={Movement}>
                About
              </Dropdown.Item>
            </DropdownButton>
          </li>
          <li className="nav">
            <a href="how" className=" fw_500 fs_15 text-black ff_Neue ">
              Resources
            </a>
          </li>
          <div>
            <Search />
          </div>
          <button className=" talk_btn fw_600 fs-15 text-black ff_Neue">
            Let’s Talk <Arrow />
          </button>
        </ul>
        <div
          className=" position-relative z_10 d_none"
          onClick={() => {
            setshow(!show);
          }}
        >
          {show ? <img src={close} alt="#" /> : <img src={menu} alt="#" />}
        </div>
      </nav>
      <div className=" flex-grow-1 d-lg-flex">
        <Container>
          <div
            className="  text-center mt-lg-5 pt-4 position-relative "
            data-aos="fade-down"
          >
            <h1 className=" fw_700 fs_120 text-white  ff_SöhneSchmal make  ">
              MAKE MARKETING{" "}
              <span className=" d-lg-block"> A GROWTH MACHINE</span>
            </h1>
            <img className=" position-absolute green1" src={green} alt="" />
            <p className=" fw_300 fs_24 text-white ff_MaisonNeue mt-4 ">
              We focus on results. Not just chatter. Elevate your business{" "}
              <span className=" d-lg-block">
                {" "}
                with our top-tier services and tech. Get a proposal now.
              </span>
            </p>
            <div className=" d-flex justify-content-center mt-4">
              <div className=" d-flex align-items-center  justify-content-between  website">
                <input type="text" placeholder="Enter Your Website" />
                <button className=" comn_btn fw_600 fs_15 text-white ff_MaisonNeue z-2">
                  Analyze{" "}
                </button>
              </div>
            </div>
          </div>
          <div
            className=" d-flex justify-content-center pt-5 mt-4 position-relative"
            data-aos="fade-down"
          >
            <img className=" position-absolute  made z-2" src={made} alt="" />
            <video
              controls
              autoPlay
              loop
              muted
              className="videos z-1 "
              src={herovideo}
            ></video>
          </div>
        </Container>
      </div>
      <img className=" position-absolute heroline z-n1" src={heroline} alt="" />
    </div>
  );
};

export default Myheader;
