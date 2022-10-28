import React from 'react'
import "./index.scss"
import { Col, Row } from 'react-bootstrap'

import Lever from 'assets/img/Group 691314967.png';
import GreenHouse from 'assets/img/Group 691314968.png';
import WorkDay from 'assets/img/workday.png';
import Taleo from 'assets/img/Group 691314970.png';
import ADP from 'assets/img/Group 691314971.png';


export default function PlayNicely() {
  return (
    <div className='playNicely' >
      <Row>
        <Col md={6}>
          <div>
            <h1 className='titlePlayNicely'>We <span>play nicely</span> with recruiters & other platforms</h1>
            <p className='textPlayNicely'>We love working with recruiters and other technology solutions to deliver the best results for you. Our team is fluent in people, technology, and results. </p>
          </div>
        </Col>
        <Col md={6}>
          <div className='groupLogo'>
            <Row>
              <Col sm={4}>
                <div className='img Lever'><img src={Lever} alt="" /></div>
              </Col>
              <Col sm={4}>
                <div className='img GreenHouse'><img src={GreenHouse} alt="" /></div>
              </Col>
              <Col sm={4}>
                <div className='img WorkDay'><img src={WorkDay} alt="" /></div>
              </Col>
              <Col sm={6}>
                <div className='img Taleo'><img src={Taleo} alt="" /></div>
              </Col>
              <Col sm={6}>
                <div className='img ADP'><img src={ADP} alt="" /></div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  )
}

