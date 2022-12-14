import React from 'react'
import { Container, Left, Logo, Navbarcon, Pagename, Right } from './style'
import logo from '../../../src/assets/logo.png'
import { Link } from 'react-scroll'
import {file} from '../../data'
import MenuNavbar from './Menu'


const Navbar = () => {
  return (
    <Container>



    <Navbarcon>

      <Left>
        <Link to='contact'> <Logo src={logo}></Logo></Link>
      </Left>
      
      <Right >
      {file.map((item, index)=>{
        return( 
          <Pagename key={index}>
            <Link to={item.href} >
            {item.name}
            </Link>
          </Pagename>         
        )
      })}
      </Right>        
        <MenuNavbar />
    </Navbarcon>


    </Container>
  )
}

export default Navbar