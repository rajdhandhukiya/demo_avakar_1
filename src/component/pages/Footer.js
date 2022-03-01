import { Button, Col, Row } from 'antd'
import React from 'react'

import time from '../SVG/time.svg'
import email from '../SVG/email.svg'
import twiter from '../SVG/twiter.svg'
import youtube from '../SVG/youtube.svg'
import linkedin from '../SVG/Linkedin.svg'
import location from '../SVG/Location.svg'
import facebook from '../SVG/facebook.svg'

import '../css/Foter.css'

function FooterCom() {
    return (
        <div>
            <div className='Footer_main'>
                <Row className='row_main' justify='center'>
                    <Col span={8} className='col_padding'>
                        <div className='Footer_header'>
                            <div><img src={location} alt="location" style={{ width: "35px", height: " 35px" }} /></div>
                            <div><h3 className='Address'> Address </h3></div>
                            <div><p className='Surat'>329, Avadh Viceroy, Surat</p></div>
                        </div>
                    </Col>
                    <Col span={8} className='col_padding'>
                        <div className='Footer_header_Second'>
                            <div><img src={email} alt="email" style={{ width: "35px", height: " 35px" }} /></div>
                            <div><h3 className='Email'> Email </h3></div>
                            <div><p className='Email_address'>rp8160155163@gmail.com</p></div>
                        </div>
                    </Col>
                    <Col span={8} className='col_padding'>
                        <div className='Footer_header_third'>
                            <div><img src={time} alt="time" style={{ width: "35px", height: " 35px" }} /></div>
                            <div><h3 className='Open_Hours' > Open Hours </h3></div>
                            <div><p className='Open_Time'>Mon-Sat: 9am - 6pm</p></div>
                        </div>
                    </Col>
                </Row>
                <div>
                    <Row justify='center'>
                        <Col span={6}>
                            <div className='About_main'>
                                <div className='About_Header'>
                                    <h1 className='About_Title'><b>About Loazzne</b></h1>
                                </div>
                                <div>
                                    <p className='About_Paragraph'>
                                        At Lennom, We don’t just provide resi-<br></br>
                                        dential and commercial heating and air <br></br>
                                        conditioning services; we make people’s<br></br>
                                        lives easier. Better.
                                    </p>
                                </div>
                                <div>
                                    <p className='quote'>Get a Quote</p>
                                </div>
                                <div>
                                    <h1 className='number_main'>666 888 000</h1>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className='Quick_Links'>
                                <p className='Quick_Links_main'><b>Quick Links</b></p>
                            </div>
                            <div className='Services_main'>
                                <div className='Services_head_one'>
                                    <div>
                                        <p className='Services_header'>Services</p>
                                    </div>
                                    <div>
                                        <p className='Services_header'>Request Appointment</p>
                                    </div>
                                    <div>
                                        <p className='Services_header'>Site Map</p>
                                    </div>
                                    <div>
                                        <p className='Services_header'>About Us</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className='Services_header'>Careers</p>
                                    </div>
                                    <div>
                                        <p className='Services_header'>Privacy Policy</p>
                                    </div>
                                    <div>
                                        <p className='Services_header'>Change Location</p>
                                    </div>
                                    <div>
                                        <p className='Services_header'>About Us</p>
                                    </div>
                                    <div>
                                        <p className='Services_header'>Terms & Conditions</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div>
                                <div className='Quick_Links'>
                                    <p className='Quick_Links_main'><b>Newsletter</b></p>
                                </div>
                                <div className='email_type'>
                                    <input type="email" placeholder='Enter Your Email' />
                                </div>
                                <div className='button_subscribe'>
                                    <Button className='subscribe_button'>
                                        <b> SUBSCRIBE</b>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='Footer_last_line'>
                    <Row justify='center'>
                        <Col span={9}>
                            <div className='footer_header'>
                                <p className='copyright_main'> © copyright 2022 by Layerdrops.com</p>
                            </div>
                        </Col>
                        <Col span={15}>
                            <div className='social'>
                                <div className='social_media'>
                                    <div >
                                        <img src={twiter} alt="twiter" className='social_twiter'/>
                                    </div>
                                    <div >
                                        <img src={facebook} alt="facebook" className='social_facebook'/>
                                    </div>
                                    <div >
                                        <img src={linkedin} alt="linkedin" className='social_linkedin'/>
                                    </div>
                                    <div >
                                        <img src={youtube} alt="youtube" className='social_youtube'/>
                                    </div>

                                    {/* <ul className='social_media'>
                                        <li>
                                        <img src={twiter} alt="twiter" className='social_twiter'/>
                                        </li>
                                        <li>
                                        <img src={facebook} alt="facebook" className='social_facebook'/>
                                        </li>
                                        <li>
                                        <img src={linkedin} alt="linkedin" className='social_linkedin'/>
                                        </li>
                                        <li>
                                        <img src={youtube} alt="youtube" className='social_youtube'/>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default FooterCom