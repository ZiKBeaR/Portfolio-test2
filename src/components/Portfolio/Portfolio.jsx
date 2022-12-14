import React from 'react'
import { Appels, Bold, Container, Divlarge, Large, Parentwork, Test, Web, Works, Yellowtree } from './style'
import treetree from '../../assets/treetree.png'
import yellowbckg from '../../assets/yellowbckg.png'
import treeonmountain from '../../assets/treeonmountain.png'
import yellowtree from '../../assets/yellowtree.png'
import pumpkin from '../../assets/pumpkin.png'
import cofee from '../../assets/cofee.png'
import spagetti from '../../assets/spagetti.png'
import appels from '../../assets/appels.png'

const Portfolio = () => {
  return (
<Container id='portfolio'>
      <Bold>Portfolio</Bold>
      <Divlarge>
        <Web>Web design</Web>
        <Large>Graphic design</Large>
        <Large>Motion design</Large>
      </Divlarge>
    
    <Works>
      
       <Test src={treetree}></Test> 
       <Test src={yellowbckg}></Test>
       <Test src={treeonmountain}></Test>
       <Yellowtree src={yellowtree}></Yellowtree>
       <Test src={pumpkin}></Test>
       <Test src={cofee}></Test>
       <Test src={spagetti}></Test>
       <Appels src={appels}></Appels>
          
    </Works>


    </Container>
  )
}

export default Portfolio