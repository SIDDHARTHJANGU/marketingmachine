import React from "react";
import { Container } from "react-bootstrap";
import { Arrow } from "./Mysvg";

const Ready = () => {
  return (
    <div id="Ready" className=" ready_bgimg py-5 ">
      <Container>
        <div
          className=" d-flex flex-wrap justify-content-center align-items-center gap-5 py-2 "
          data-aos="fade-down"
        >
          <h2 className=" fw_300 fs_40 ff_MaisonNeue text-white">
            Ready to hit your goals?
          </h2>
          <button className="book_btn fw_600 fs_15 text-black ff_MaisonNeue">
            Book a Strategy Call <Arrow />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Ready;
