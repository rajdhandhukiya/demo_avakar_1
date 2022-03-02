import React from "react";
import { Button, Card, Col, Row } from "antd";

import Services_two from "../SVG/Services_two.jpeg";
import Services_first from "../SVG/Services_first.jpeg";
import Services_three from "../SVG/Services_three.jpeg";

import "../css/Services.css";

function ServicesBar() {
  const { Meta } = Card;
  return (
    <div id="section2">
      <div className="Services_Box">
        <Row>
          <Col span={12} offset={6}>
            <h1 className="Services_Head">Our Services</h1>
          </Col>
        </Row>
        <div className="Service_Data">
          <Row gutter={16} className="service_main">
            <Col span={8}>
              <Card
                hoverable
                className="service_header"
                cover={
                  <img
                    src={Services_first}
                    alt="Services_first"
                    className="service_image"
                  />
                }
              >
                <Meta
                  title={<h1 className="Cooling_Service">Cooling Services</h1>}
                  description={
                    <p className="paragraph_Title">
                      there are many variations passages of loream ipsum
                      available but the majority have suffered alteration{" "}
                    </p>
                  }
                />
                <div className="buttonic">
                  <Button className="button_learn">LEARN MORE</Button>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                className="service_header"
                cover={
                  <img
                    src={Services_two}
                    alt="Services_two"
                    className="service_image"
                  />
                }
              >
                <Meta
                  title={<h1 className="Cooling_Service">Heating Services</h1>}
                  description={
                    <p className="paragraph_Title">
                      there are many variations passages of loream ipsum
                      available but the majority have suffered alteration{" "}
                    </p>
                  }
                />
                <div className="buttonic">
                  <Button className="button_learn">LEARN MORE</Button>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                className="service_header"
                cover={
                  <img
                    src={Services_three}
                    alt="Services_three"
                    className="service_image"
                  />
                }
              >
                <Meta
                  title={<h1 className="Cooling_Service">Other Services</h1>}
                  description={
                    <p className="paragraph_Title">
                      there are many variations passages of loream ipsum
                      available but the majority have suffered alteration{" "}
                    </p>
                  }
                />
                <div className="buttonic">
                  <Button className="button_learn">LEARN MORE</Button>
                </div>
              </Card>
            </Col>
          </Row>
          <div className="overtimes">                                                
            <Row className="overtimes_main">
              <Col span={16}>
                <div className="overtime_days">
                  <h1 className="charges">
                    No overtime charges, 7 days a week
                  </h1>
                </div>
              </Col>
              <Col span={8}>
                <div className="overtime_days2">
                  <Button className="quote_free">GET A FREE QUOTE</Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesBar;
