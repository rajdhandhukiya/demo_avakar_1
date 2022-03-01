import emailjs, { send } from "emailjs-com";
import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import { Button, Card, Col, Form, Input, Row, Select } from 'antd'


import Blog1 from '../SVG/Blog1.jpeg'
import Blog2 from '../SVG/Blog2.jpeg'
import Blog3 from '../SVG/Blog3.jpeg'

import '../css/LatestNews.css'

function LetestNewsCom() {
    const { Meta } = Card;
    const [lat, setLet] = useState(21.170);
    const [long, setLong] = useState(72.831062);
    const [yourName, setYourName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [selectedValue, setSelectedValue] = useState()

    const { Option } = Select;

    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_qjs9k98',
            'template_bvs60h7',
            e.target,
            'jNaWD_zuX_7J4f54H'
        )
            .then(
                (result) => {
                    console.log(result.text);
                    setYourName("");
                    setEmail("");
                    setPhoneNumber("");
                    setSelectedValue("")
                },
                (error) => {
                    console.log(error.text);
                }
            );

        
    };
    // const handleChange = (e) => {
    //     setToSend({ ...toSend, [e.target.name]: e.target.value });
    //     console.log("selected value", e.target.value);
    // };


    return (
        <div id="section3">
            <div className='latestNews_main'>
                <Row>
                    <Col span={12} offset={6}>
                        <h1 className='Our_latest_news'>Our latest news</h1>
                    </Col>
                </Row>
                <div className='Latest_header'>
                    <Row gutter={16} >
                        <Col span={8}>
                            <Card
                                hoverable
                                style={{ width: 370, height: 590 }}
                                cover={<img src={Blog1} alt="Blog1" style={{ padding: "10px " }} />}
                            >
                                <Meta title={<p className='Comments'>by admin - 3 Comments</p>} description={<p className='paragraph_Head'>How does a ductless heat<br></br> pump work? </p>} />
                                <div className='buttonic'>
                                    <p className='passages'>
                                        There are many variations passages of <br></br>lorem ipsum available but the majority <br></br> have suffered alteration.
                                    </p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                hoverable
                                style={{ width: 370, height: 590 }}
                                cover={<img src={Blog2} alt="Blog2" style={{ padding: "10px " }} />}
                            >
                                <Meta title={<p className='Comments'>by admin - 3 Comments</p>} description={<p className='paragraph_Head'>How does a ductless heat<br></br> pump work? </p>} />
                                <div className='buttonic'>
                                    <p className='passages'>
                                        There are many variations passages of <br></br>lorem ipsum available but the majority <br></br> have suffered alteration.
                                    </p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                hoverable
                                style={{ width: 370, height: 590 }}
                                cover={<img src={Blog3} alt="Blog3" style={{ padding: "10px " }} />}
                            >
                                <Meta title={<p className='Comments'>by admin - 3 Comments</p>} description={<p className='paragraph_Head'>How does a ductless heat<br></br> pump work? </p>} />
                                <div className='buttonic'>
                                    <p className='passages'>
                                        There are many variations passages of <br></br>lorem ipsum available but the majority <br></br> have suffered alteration.
                                    </p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div id="section4">
                <div className='Googlemaping'>
                    <Row>
                        <Col span={12}>
                            <div style={{ height: '100vh', width: '100%' }}>
                                <GoogleMapReact
                                    options={{
                                        mapTypeControl: true,
                                        streetViewControl: true,
                                    }}
                                    bootstrapURLKeys={{
                                        key: "",
                                    }}
                                    defaultCenter={{ lat: lat, lng: long }}
                                    zoom={14}
                                    text="My Marker"
                                    onClick={(e) => {

                                        setLet(e.lat);
                                        setLong(e.lng);
                                    }}
                                />
                            </div>
                        </Col>
                        <Col span={12} className="col_padding">
                            <div>
                                <h1 className='Quote_head'>Get A Quote</h1>
                            </div>
                            <div>
                                <p className='para_header'>To request a service call, please fill out <br></br>the form below</p>
                            </div>
                            <form
                                onSubmit={sendEmail}
                            >
                                <div className='horizontal_data'>
                                    <div className='horizontal_fields'>
                                        <Form.Item >
                                            <Input
                                                placeholder="Your name"
                                                name="your_name"
                                                value={yourName}
                                                onChange={(e) => setYourName(e.target.value)} />
                                        </Form.Item>
                                    </div>
                                    <div className='horizontal_fields_email'>
                                        <Form.Item >
                                            <Input
                                                placeholder="email address"
                                                name="email"
                                                value={email}
                                                type="email"
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </Form.Item>
                                    </div>
                                </div>

                                <Form.Item >
                                    <Input
                                        placeholder="phone number"
                                        name="phone_Number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)} />
                                </Form.Item>
                                <div className='select_service'>
                                    <Select defaultValue="select service" className='select_val'  onChange={(e) => setSelectedValue(e.target.value)}>
                                        <Option value="service 1">service 1</Option>
                                        <Option value="service 2">service 2</Option>
                                        <Option value="service 3">service 3</Option>
                                        <Option value="service 4">service 4</Option>
                                    </Select>
                                </div>

                                <Form.Item>
                                    <Button className='Submit' htmlType="submit">Submit Now</Button>
                                </Form.Item>
                            </form>
                        </Col>
                    </Row>
                </div>
                </div>
            </div>
        </div>
    )

}

export default LetestNewsCom