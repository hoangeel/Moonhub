import React, { useState } from 'react'
import "./index.scss"
import {Container, Alert, InputGroup} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Close from 'assets/img/close.png';

import HeaderHome from 'component/Home/Header';
import Section from 'component/Home/Section';
import Meet from 'component/Home/Meet';
import Icon from 'assets/img/Frame 36783.png';
import Believe from 'component/Home/Believe';
import Where from 'component/Home/Where';
import Why from 'component/Home/Why';
import PlayNicely from 'component/Home/PlayNicely';
import Trusted from 'component/Home/Trusted';
import Get from 'component/Home/Get';
import Footer from 'component/Home/Footer';

export default function Home() {
  const [show, setShow] = useState(true);
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };
  return (
    <div className='homePages'>
      <div className='background'>
        <div className='colorAlert'>
          <Container>
            <Alert show={show} className='alertHome'>
              <p className='textAlert'>
                Meet your one-stop partner for all your talent needs. <span className='spanAlert'>Talk to an Expert→</span>
              </p>
              <div onClick={() => setShow(false)} className="badgeAlert"><img src={Close} alt="" /></div>
            </Alert>
          </Container>
        </div>
        <Container>
          <HeaderHome/>
          <Section/>
        </Container>
      </div>
      <div>
        <Container>
          <Meet/>
        </Container>
      </div>
      <div>
        <Slider {...settings}>
          <div  >
            <div className='meetSlider'>
              <InputGroup className="groupMeet">
                <img src={Icon} alt="" />
                <p>Engineering</p>
              </InputGroup>
            </div>
          </div>
          <div  >
            <div className='meetSlider'>
              <InputGroup className="groupMeet">
                <img src={Icon} alt="" />
                <p>Marketing</p>
              </InputGroup>
            </div>
          </div>
          <div  >
            <div className='meetSlider'>
              <InputGroup className="groupMeet">
                <img src={Icon} alt="" />
                <p>Retail</p>
              </InputGroup> 
            </div>
          </div>
          <div  >
            <div className='meetSlider'>
              <InputGroup className="groupMeet">
                <img src={Icon} alt="" />
                <p>Diversity</p>
              </InputGroup>
            </div>
          </div>
          <div  >
            <div className='meetSlider'>
              <InputGroup className="groupMeet">
                <img src={Icon} alt="" />
                <p>Finance</p>
              </InputGroup>
            </div>
          </div>
          <div  >
            <div className='meetSlider'>
              <InputGroup className="groupMeet">
                <img src={Icon} alt="" />
                <p>Health Care</p>
              </InputGroup>
            </div>
          </div>
        </Slider>
      </div>
      <div className='backgroundBelieve'>
        <Container>
          <Believe/>
        </Container>
      </div>
      <div className='backgroundWhere'>
        <Container>
          <Where/>
        </Container>
      </div>
      <Container>
        <Why/>
      </Container>
      <div className='backgroundPlayNicely'>
        <Container>
          <PlayNicely/>
        </Container>
      </div>
      <Trusted/>

      <div className='backgroundGet'>
        <Container>
          <Get/>
        </Container>
      </div>
      <div className='backgroundFooter'>
        <Container>
          <Footer/>
        </Container>
      </div>
    </div>
  )
}
