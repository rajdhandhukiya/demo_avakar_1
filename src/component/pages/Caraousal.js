import React from 'react'
import { Button, Carousel, Col, Row } from 'antd'

import acimage2 from "../SVG/acimage2.jpeg"

import '../css/caraousal.css'

function CaraousalCom() {
    return (
        <div id='section'>
            <Carousel effect="fade">
                <Row>
                    <Col>
                       
                        <div className='image_header_2'>
                        <img src={acimage2} alt="acimage1" className='image_swiper' />
                        <div className="overlay_2" >
                            <div className="text_2"><h1><b>Heating and Air</b></h1><br></br><h1><b>Conditioning</b></h1><br></br><h1><b>Specialist</b></h1></div>
                           
                            </div>
                        </div>
                    </Col>

                </Row>
            </Carousel>
        </div>
    )
}

export default CaraousalCom