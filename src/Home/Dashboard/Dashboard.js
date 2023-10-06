import Header from "../../Header/Header";
import './Dashboard.css'
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";



const Dashboard = () => {
  return (
    <>
    <Header/>
    <Container>

    <Row>
        <Col lg={6} className="inner-container2">
        <Row>
              <Col xs={3}>
                <div className="box-container" style={{backgroundColor:"#ffe2e6"}}>
                  <h4>$1k</h4>
                  <p>Total Sales</p>
                </div>
              </Col>
              <Col xs={3}>
              <div className="box-container" style={{backgroundColor:"#fff4de"}}>
                  <h4>$1k</h4>
                  <p>Total Sales</p>
                </div>
              </Col>
              <Col xs={3}>
              <div className="box-container" style={{backgroundColor:"#dcfce7"}}>
                  <h4>$1k</h4>
                  <p>Total Sales</p>
                </div>
              </Col>
              <Col xs={3}>
              <div className="box-container" style={{backgroundColor:"#f4e8ff"}}>
                  <h4>$1k</h4>
                  <p>Total Sales</p>
                </div>
              </Col>
        </Row>
          
        </Col>
        <Col lg={5} className="inner-container2">
          <Chart1/>
        </Col>
      </Row>


      <Row>
        <Col lg={4} className="inner-container">
          <Chart2/>
        </Col>
        <Col lg={4} className="inner-container">
          <Chart3/>
        </Col>
        <Col lg={3} className="inner-container">
          <Chart1/>
          </Col>
      </Row>

      <Row>
        <Col lg={4} className="inner-container">
          <Chart3/>
        </Col>
        <Col lg={4} className="inner-container">
          <Chart2/>
        </Col>
        <Col lg={3} className="inner-container">
          <Chart3/>
        </Col>
      </Row>

    </Container>
    </>
  );
};

export default Dashboard;