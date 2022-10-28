import "./index.scss"
import {Stack} from 'react-bootstrap'
import React from "react";


export default function Footer() {
  return (
    <div className='footer'>
      <Stack direction="horizontal">
        <h1 className="logo">Moonhub</h1>
        <p className="ms-auto text">info@moonhub.com</p>
      </Stack>
      <hr className="hr"/>
      <p className="end">© Ever Careers, Inc.</p>
    </div>
  )
}
