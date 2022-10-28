import React from 'react'
import "./index.scss"
import { Form, InputGroup, Button, Card } from 'react-bootstrap'

import job from 'assets/img/Frame 36784.png';
import cheaper from 'assets/img/Frame 36785.png';


export default function Section() {
  return (
    <div className='section' >
      <h1 className='titleSection'>Hire superstar <span className='spanTitle'>Software Engineers</span> - unlock growth. </h1>
      <p className='textSection'>Flex recruiting with Moonhub’s on demand hiring experts. Unlock  limitless potential by hiring the best in record time & 1/2 the cost.</p>
      <InputGroup>
        <Form className='email'>
          <Form.Control className='Type' type="email" placeholder="Type your email address" />
        </Form>
        <Button className='talkButton'>Talk to an Expert</Button>
      </InputGroup>
      <InputGroup className='groupCardSection'>
        <Card className='Card'>
          <img src={job} alt="" />
          <h1>100+</h1>
          <p>job titles across functions supported by our experts.</p>
        </Card>
        <Card className='Card'>
          <img src={cheaper} alt="" />
          <h1>50-75%+</h1>
          <p>cheaper than internal recruiters & external agencies.</p>
        </Card>
      </InputGroup>
    </div>
  )
}
