import { Button, Col, Row } from "antd";
import React from "react";

import manage from "../SVG/managing.png";
import "../css/contant.css";
function ContantItem() {
  return (
    <>
      <div className="contant">
        <Row gutter={12} justify="center" className="contant_main">
          <Col span={8}>
            <img src={manage} alt="manage" />
          </Col>
          <Col span={12}>
            <h4 className="Loazene">Welcome to loazzne</h4>
            <pre className="Heat_line">
              Heating and air conditioning repair and<br></br>
              installation company
            </pre>
            <p className="available_line">
              There are many variations of passages of lorem ipsum<br></br>{" "}
              available, but the majorify have suffered alteration in some
              <br></br>
              form by injected humour, or randmised words which don't look
              <br></br>
              even slightly believable.
            </p>
            <div style={{ paddingTop: "21px" }}>
              <Button className="Learn_more">
                <b>LEARN MORE</b>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ContantItem;
