import React from 'react'
import "./index.scss"
import { Tab, Nav, Button } from 'react-bootstrap'

import Img from 'assets/img/Rectangle 112351.png';


export default function Believe() {
  return (
    <div className='believe' >
      <div><h1 className='titleBelieve'>We <span>believe</span> the right people get you to the moon and beyond.</h1></div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Nav className='navBelieve' >
          <Nav.Item className='navItem'>
            <Nav.Link eventKey="first" className='navLink'>Permanent Talent</Nav.Link>
          </Nav.Item>
          <Nav.Item className='navItem Elastic'>
            <Nav.Link eventKey="second" className='navLink'>Elastic Workforce</Nav.Link>
          </Nav.Item>
          <Nav.Item className='navItem'>
            <Nav.Link eventKey="three" className='navLink'>AI Solutions</Nav.Link>
          </Nav.Item>
        </Nav>

        <div className='contentBelieve'>
          <div className='img'><img src={Img} alt="" /></div>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="three">
              <Sonnet />
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  )
}

function Sonnet() {
  return (
    <div className='content'>
      <h1>Permanent Talent</h1>
      <p>
        Hire highly engaged permanent talent for your workforce. Our recruiters identify top candidates from our 
        proprietary database of millions of profiles to help you quickly hire quality, top-fit employees. 
      </p>
      <Button>Try Moonhub Permanent →</Button>
    </div>
  )
}
