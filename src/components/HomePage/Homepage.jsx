import React from 'react'
import { Bigtext, Borderredbtn, Btns, Container, Foto, Homepagecon, Left, Redbtn, Right, Smalltext } from './style'
import photo from '../../assets/photo.png'
import { Link } from 'react-scroll'

const Homepage = () => {
  return (

    <Container id='home'>

    <Homepagecon>
      <Left>
        <Bigtext>Andriano Smith Web designer </Bigtext>
        <Smalltext>Wide range option of furbitures crafted using the brst selected wood.</Smalltext>
        <Btns>
          <Redbtn><Link to='about' className='linkk'>Hire me</Link></Redbtn>
          <Link to='portfolio' className='link'><Borderredbtn>View portfolio</Borderredbtn></Link>
        </Btns>
      </Left>

      <Right>
       <Foto src={photo}></Foto>

      
      </Right>

    </Homepagecon>

    </Container>
  )
}

export default Homepage