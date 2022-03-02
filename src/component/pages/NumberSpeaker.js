import { Button, Carousel, Col, Row } from "antd";
import React from "react";

import gal1 from "../SVG/gal1.jpeg";
import gal2 from "../SVG/gal2.jpeg";
import gal3 from "../SVG/gal3.jpeg";
import gal4 from "../SVG/gal4.jpeg";
import gal5 from "../SVG/gal5.jpeg";
import gal6 from "../SVG/gal6.jpeg";
import ctastyle from "../SVG/ctastyle.png";
import download from "../SVG/download.png";
import Founder1 from "../SVG/Founder1.jpeg";
import Founder2 from "../SVG/Founder2.jpeg";
import Founder3 from "../SVG/Founder3.jpeg";

import "../css/NumberSpeakers.css";

function NumberSpeakersCom() {
  const contentStyle = {
    height: "160px",
    color: "black",
    lineHeight: "160px",
    textAlign: "center",
    background: "#f1f1f1",
  };

  return (
    <div className="Number_main">
      <Row>
        <Col span={12} offset={6}>
          <h1 className="Numbers_Speakers">Numbers Speakers.</h1>
        </Col>
      </Row>
      <div className="header_num">
        <Row justify="center">
          <Col span={5}>
            <div className="num_main">
              <span className="num_span_count_3"></span>
              <div>
                <p className="num_title">
                  Air Conditioning Repairs<br></br> and Install
                </p>
              </div>
            </div>
          </Col>
          <Col span={5}>
            <div className="num_main">
              <span className="num_span_count"></span>
              <div>
                <p className="num_title">
                  Air Conditioning Repairs <br></br>and Install
                </p>
              </div>
            </div>
          </Col>
          <Col span={5}>
            <div className="num_main">
              <span className="num_span_count_2"></span>
              <div>
                <p className="num_title">
                  Air Conditioning Repairs<br></br> and Install
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="image_main">
        <Row align="bottom">
          <Col span={4}>
            <div className="image_header">
              <img src={gal1} alt="gal1" className="image_para" />
              <div className="overlay">
                <div className="text">
                  Maintenance and <br></br>Repair
                </div>
                <Button className="buttoner"> {">"}</Button>
              </div>
            </div>
          </Col>
          <Col span={4}>
            <div className="image_header">
              <img src={gal2} alt="gal2" className="image_para" />
              <div className="overlay">
                <div className="text">
                  Maintenance and <br></br>Repair
                </div>
                <div>
                  <Button className="buttoner"> {">"}</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col span={4}>
            <div className="image_header">
              <img src={gal3} alt="gal3" className="image_para" />
              <div className="overlay">
                <div className="text">
                  Maintenance and <br></br>Repair
                </div>
                <div>
                  <Button className="buttoner"> {">"}</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col span={4}>
            <div className="image_header">
              <img src={gal4} alt="gal4" className="image_para" />
              <div className="overlay">
                <div className="text">
                  Maintenance and <br></br>Repair
                </div>
                <div>
                  <Button className="buttoner"> {">"}</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col span={4}>
            <div className="image_header">
              <img src={gal5} alt="gal5" className="image_para" />
              <div className="overlay">
                <div className="text">
                  Maintenance and <br></br>Repair
                </div>
                <div>
                  <Button className="buttoner"> {">"}</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col span={4}>
            <div className="image_header">
              <img src={gal6} alt="gal6" className="image_para" />
              <div className="overlay">
                <div className="text">
                  Maintenance and <br></br>Repair
                </div>
                <div>
                  <Button className="buttoner"> {">"}</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="Founder_details">
        <Row justify="center" className="founder_main">
          <Col span={3}>
            <img className="image_founder" src={Founder1} alt="founder1" />
          </Col>
          <Col span={3}>
            <img className="image_founder" src={Founder2} alt="founder2" />
          </Col>
          <Col span={3}>
            <img className="image_founder" src={Founder3} alt="founder3" />
          </Col>
        </Row>
        <Carousel autoplay align="center">
          <div>
            <h3 style={contentStyle}>
              This is due to their excellent service, competitive<br></br>
              pricing and customer support . It's throughly refresing <br></br>
              to get such a personal touch.
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              {" "}
              This is due to their excellent service, competitive<br></br>
              pricing and customer support . It's throughly refresing <br></br>
              to get such a personal touch.
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              {" "}
              This is due to their excellent service, competitive<br></br>
              pricing and customer support . It's throughly refresing <br></br>
              to get such a personal touch.
            </h3>
          </div>
        </Carousel>
        <div className="evanto">
          <Row justify="center">
            <Col span={3}>
              <img src={download} alt="download" />
            </Col>
            <Col span={3}>
              <img src={download} alt="download" />
            </Col>
            <Col span={3}>
              <img src={download} alt="download" />
            </Col>
            <Col span={3}>
              <img src={download} alt="download" />
            </Col>
            <Col span={3}>
              <img src={download} alt="download" />
            </Col>
            <Col span={3}>
              <img src={download} alt="download" />
            </Col>
            <Col span={3}>
              <img src={download} alt="download" />
            </Col>
            <Col span={3}>
              <img src={download} alt="download" />
            </Col>
          </Row>
        </div>
        <div>
          <img src={ctastyle} alt="ctastle" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default NumberSpeakersCom;
