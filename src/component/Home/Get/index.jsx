import "./index.scss"
import { Form, InputGroup, Button} from 'react-bootstrap'
import React from "react";


export default function Get() {
  return (
    <div className='meet'>
      <h1 className='titleGet'>Get in touch with <span>Moonhub</span></h1>
      <p className='textGet'>Start hiring the world’s best talent for your team. Let us help you get to the moon and beyond. </p>
      <div className="groupSearch">
        <div>
          <InputGroup>
            <Form className='job'>
              <Form.Control className='Control' type="email" placeholder="Type your email address" />
            </Form>
            <Button className='searchButton'>Talk to an Expert</Button>
          </InputGroup>
        </div>
      </div>
    </div>
  )
}
