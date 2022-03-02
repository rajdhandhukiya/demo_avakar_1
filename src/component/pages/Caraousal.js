import React from "react";
import { Carousel, Col, Row } from "antd";

import acImage2 from "../SVG/acimage2.jpeg";

import "../css/caraousal.css";

function CaraousalCom() {
  return (
    <div id="section">
      <Carousel effect="fade">
        <Row>
          <Col>
            <img src={acImage2} alt="acImage1" className="image_Swiper" />
          </Col>
        </Row>
      </Carousel>
    </div>
  );
}

export default CaraousalCom;
