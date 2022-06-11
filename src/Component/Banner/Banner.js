import React from 'react'
import './Banner.css'
import {Container,Row} from 'react-bootstrap'



function Banner() {
  return (
    <Container className='mt-1'>
        <Row >
            <div className='banner  shadow'
            style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"white",
                fontWeight:"600"
            }}
            >
                <div className='box'>
                <h1> This Diwali apno ke sung</h1>
             <b>Enjoy online Shoping with Apna Mittee</b>
                </div>
            
            </div>
        </Row>
    </Container>
  )
}

export default Banner