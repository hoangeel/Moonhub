import React from 'react'
import "./index.scss"
import { Col, Row } from 'react-bootstrap'

import Img from 'assets/img/Rectangle 11221.png';


export default function Why() {
  return (
    <div className='why' >
      <Row>
        <Col lg={6}>
          <div>
            <h1 className='titleWhy'>Why <span>forward-thinking</span> businesses choose MoonHub</h1>
          </div>
        </Col>
        <Col lg={6}>
          <div>
            <p className='textWhy'>
              Access best-fit, qualified, and engaged candidates found through human dedicated human recruiters. 
              Operational excellence augmented by AI technology enables quality, cost, and turnaround times beyond 
              your expectations. 
            </p>
          </div>
        </Col>
      </Row>
      <div className='imgWhy'><img src={Img} alt="" /></div>
      <Row className='rowWhy'>
        <Col lg={3} md={6} className="colWhy">
          <div className='cardWhy'>
            <div className='boderCard'></div>
            <h1>2 weeks</h1>
            <p>Average time to make a hire on Moonhub, working with a dedicated recruiter with expertise in the role.</p>
          </div>
        </Col>
        <Col lg={3} md={6} className="colWhy">
          <div className='cardWhy'>
            <div className='boderCard'></div>
            <h1>{"<15%"}</h1>
            <p>Average cost/hire (as a % of starting salary). Automation technology savings passed on to you.</p>
          </div>
        </Col>
        <Col lg={3} md={6} className="colWhy">
          <div className='cardWhy'>
            <div className='boderCard'></div>
            <h1>100M+</h1>
            <p>Candidates in our proprietary database. Work with a partner who knows the market and who’s looking.</p>
          </div>
        </Col>
        <Col lg={3} md={6} className="colWhy">
          <div className='cardWhy'>
            <div className='boderCard'></div>
            <h1>1 in 5</h1>
            <p>Candidates recommended by a Moonhub recruiter get the offer. We only show top, quality candidates - no filler.</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

