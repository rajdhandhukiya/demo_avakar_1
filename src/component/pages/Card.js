import React from "react";
import { BackTop, Card, Col, Row } from "antd";

import wallet from "../SVG/wallet.svg";
import services from "../SVG/services.svg";
import handshake from "../SVG/handshake.svg";
import guarrantee from "../SVG/guarrantee.svg";
import experience from "../SVG/experience.svg";

import "../css/Card.css";
import { UpOutlined } from "@ant-design/icons/lib/icons";

function CardItem() {
  const { Meta } = Card;
  return (
    <div className="card_main">
      <div className="card_icon" id="section1">
        <Row justify="center">
          <Col span={4} xl={4} className="card_space">
            <Card className="hoverable">
              <img
                src={wallet}
                alt="wallet"
                className="Satisfaction_Guarantee"
              />
              <Meta title="No Upfront Payments" />
            </Card>
          </Col>
          <Col span={4} xl={4} className="card_space">
            <Card className="hoverable">
              <img
                src={guarrantee}
                alt="wallet"
                className="Satisfaction_Guarantee"
              />
              <Meta title="Satisfaction Guarantee" />
            </Card>
          </Col>
          <Col span={4} xl={4} className="card_space">
            <Card className="hoverable">
              <img
                src={services}
                alt="wallet"
                className="Satisfaction_Guarantee"
              />
              <Meta title="Emergency Service" />
            </Card>
          </Col>
          <Col span={4} xl={4} className="card_space">
            <Card className="hoverable">
              <img
                src={handshake}
                alt="wallet"
                className="Satisfaction_Guarantee"
              />
              <Meta title="Fixed Right Promise" />
            </Card>
          </Col>
          <Col span={4} xl={4} className="card_space">
            <Card className="hoverable">
              <img
                src={experience}
                alt="wallet"
                className="Satisfaction_Guarantee"
              />
              <Meta title="8 Years Experience" />
            </Card>
          </Col>
        </Row>
      </div>
      <BackTop>
        <div className="backtop_main">
          <UpOutlined />
        </div>
      </BackTop>
    </div>
  );
}

export default CardItem;
