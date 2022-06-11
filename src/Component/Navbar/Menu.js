import React from 'react'
import './Navbars.css'
import {Container,Nav,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Menu() {
  return (
    <div>
       
        <Navbar  expand="lg" className='navColor'>
  <Container>
    <Link  to="/apnamittee" className='brandDesign'>ApnaMITTEE</Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">

        <Link to="/cart" className='removeLine'>
          <span className='logoA text-center removeLine'><i class="fa-solid fa-cart-plus fa-2x"></i>
          <span className='count mx-2  text-center removeLine '
          style={{backgroundColor:"orangered",
          borderRadius:"50%",
          padding:"10px 18px",
          color:"white",
          fontWeight:"500"
        }}
          >0</span>
          </span>
         

       </Link>
      
       
          
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>



    
    </div>
  )
}

export default Menu