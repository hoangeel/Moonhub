import React from 'react'
import "./index.scss"
import { Carousel} from 'react-bootstrap'

import Icon from 'assets/img/Vector (2).png';
import one from 'assets/img/Rectangle 11236.png';
import two from 'assets/img/Rectangle 11235.png';


export default function Trusted() {
  return (
    <div className='centerTrusted'>
      <div className='trusted' >
        <div><h1 className='titleWhere'>Trusted by <span>clients and candidates</span> alike</h1></div>
        <div>
          <Carousel fade interval="15000" className='carouselTrusted'>
            <Carousel.Item>
              <div className='contentTrusted'>
                <div className='groupImg'>
                  <div className='imgs'>
                    <img src={two} alt="" />
                  </div>
                  <div className='img'>
                    <img src={one} alt="" />
                    <div className='cardImg'>
                      <div className='boderTop'/>
                      <h1 className='name'>Lisa Marie</h1>
                      <p className='job'>Co-Founder & CEO, Gyfting</p>
                    </div>
                  </div>
                </div>
                <div className='content'>
                  <img src={Icon} alt="" />
                  <p>
                    Our package with Pilot is exactly what we wanted and what we needed — no BS, no fluff. Pilot’s 
                    services are straight to the point and the team is so pleasant to work with. As a small business 
                    and a startup, that’s what you really need.”
                  </p>
                </div>
              </div>
              <hr className='hrTrusted'/>
            </Carousel.Item>
            <Carousel.Item>
              <div className='contentTrusted'>
                <div className='groupImg'>
                  <div className='imgs'>
                    <img src={one} alt="" />
                  </div>
                  <div className='img'>
                    <img src={two} alt="" />
                    <div className='cardImg'>
                      <div className='boderTop'/>
                      <h1 className='name'>Lisa Marie</h1>
                      <p className='job'>Co-Founder & CEO, Gyfting</p>
                    </div>
                  </div>
                </div>
                <div className='content'>
                  <img src={Icon} alt="" />
                  <p>
                    Our package with Pilot is exactly what we wanted and what we needed — no BS, no fluff. Pilot’s 
                    services are straight to the point and the team is so pleasant to work with. As a small business 
                    and a startup, that’s what you really need.”
                  </p>
                </div>
              </div>
              <hr className='hrTrusted'/>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

