import React from 'react'
import "./index.scss"
import { Button, Stack } from 'react-bootstrap'


export default function Header() {
  return (
    <div className='headerHome' >
      <Stack direction="horizontal" className='stackHome'>
        <div className='logo'>Moonhub</div>
        <Button className='fontButton ApplyButton ms-auto'>Apply for a Job</Button>
        <Button className='fontButton hireButton'>Hire Now</Button>
        <div className='vector'/>
        <Button className='fontButton LoginButton'>Login</Button>
      </Stack>
    </div>
  )
}
