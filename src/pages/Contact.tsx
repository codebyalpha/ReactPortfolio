import React, { useState } from 'react'
import './Contact.css'
import contactimg from '../image/Contactgif.gif'
import { Icon } from '@iconify/react';
import { Container, Row, Col } from 'react-bootstrap'

function Contact() {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [msg, setMsg] = useState('')

  return (
    <>
    <Container className='contactcontainer'>
        <Row className='contactgif'>
            <Col>
            <img src={contactimg} alt="" />
            </Col>
            <Col className='contact'>
                <Col>
                <Icon icon="line-md:email-opened-twotone-alt" />
                <a href="mailto:srd8650@gmail.com">srd8650@gmail.com</a>
                </Col>
                <Col>
                <Icon icon="material-symbols:phone-enabled-outline" />
                <a href="tel:7505660766">+91 7505660766</a>
                </Col>
            </Col>
        </Row>
        <Row className='contactrow'>
            <Col>
            <label>Name</label>
                <input type='text' placeholder='Full Name' value={name} onChange={(e)=> setName(e.target.value)} />
            </Col>
            <Col>
            <label>Contact</label>
                <input type='number' placeholder='Contact Number' value={phone} onChange={(e)=> setPhone(e.target.value)} />
            </Col>
            <Col>
            <label>Message</label>
                <textarea rows={10} style={{resize: 'none'}} placeholder='Type here...' value={msg} onChange={(e)=> setMsg(e.target.value)} />
            </Col>
            <Col style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button className='btnstyle'>Send</button>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default Contact
