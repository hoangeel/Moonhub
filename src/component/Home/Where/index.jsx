import React from 'react'
import "./index.scss"
import { Col, Row } from 'react-bootstrap'

import Support from 'assets/img/Frame 36784 (1).png';
import Leading from 'assets/img/Frame 36785 (1).png';
import Partner from 'assets/img/Frame 36786.png';


export default function Where() {
  return (
    <div className='where' >
      <div><h1 className='titleWhere'>Where <span>science</span> meets <span>art</span></h1></div>
      <p className='textWhere'>
        Moonhub combines cutting-edge AI and automation solutions with recruiting expertise to deliver unparalleled 
        talent. Whether its helping  recruiters find candidates or agencies scale. 
      </p>
      <Row className='rowWhere'>
        <Col>
          <div className='cardWhere'>
            <img src={Support} alt="" />
            <p>dedicated support from experts</p>
          </div>
        </Col>
        <Col>
          <div className='cardWhere leading'>
            <img src={Leading} alt="" />
            <p>leading AI technology</p>
          </div>
        </Col>
        <Col>
          <div className='cardWhere leading'>
            <img src={Partner} alt="" />
            <p>a partner that grows with you</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

