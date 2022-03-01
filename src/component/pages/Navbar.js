import React from 'react'
import { Layout, Menu,  Row, Col, Button } from 'antd';

import CardItem from './Card';
import FooterCom from './Footer';
import ContantItem from './Contant';
import ServicesBar from './Services';
import CaraousalCom from './Caraousal';
import LetestNewsCom from './LatestNews';
import NumberSpeakersCom from './NumberSpeaker';

import 'antd/dist/antd.css';
import '../css/navbar.css'
function NavbarComponent() {
    const { Header, 
        Content,
         Footer 
        } = Layout;
    return (
        <div>
            <Layout className="layout" theme="light" >
                <Header theme="light" className='layout_header'>
                    <Row  justify="center">
                        <Col xxl={5}>
                         <a href='#section'> <h1 className='avakar' >AVAKAR</h1></a>  
                        </Col>
                        <Col xxl={8}>
                            <div className="logo" />
                            <Menu className='layout_header_menu' mode="horizontal" >
                                <Menu.Item key="Home">
                                    <a href="#section">Home</a>
                                </Menu.Item>
                                <Menu.Item key="About">
                                    <a href="#section1">About</a>
                                </Menu.Item>
                                <Menu.Item key="Services">
                                    <a href="#section2">Services</a>
                                </Menu.Item>
                                <Menu.Item key="Blog">
                                    <a href="#section3">Blog</a>
                                </Menu.Item>
                                <Menu.Item key="Contact">
                                    <a href="#section4">Contact</a>
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={4}>
                            <Button className='book_today'>
                               <b>BOOK TODAY</b>
                            </Button>
                        </Col>
                    </Row>

                </Header>
                <Content style={{ padding: '0 50px' }} className="contant">
                    <CaraousalCom />
                    <CardItem />
                    <ContantItem />
                    <ServicesBar />
                    <NumberSpeakersCom />   
                    <LetestNewsCom />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    <FooterCom />
                </Footer>
            </Layout>
        </div>
    )
}

export default NavbarComponent