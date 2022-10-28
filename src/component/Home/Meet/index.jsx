import "./index.scss"
import { Form, InputGroup, Button} from 'react-bootstrap'
import React from "react";


export default function Meet() {
  return (
    <div className='meet' >
      <h1 className='titleMeet'>Meet <span>top employers</span> on MoonHub</h1>
      <div className="groupSearch">
        <div>
          <Form.Label className="search">Search for</Form.Label>
          <InputGroup>
            <Form className='job'>
              <Form.Control className='Control' type="email" placeholder="job title or keyword" />
            </Form>
            <Button className='searchButton'>Search 12580 jobs</Button>
          </InputGroup>
        </div>
      </div>
    </div>
  )
}
