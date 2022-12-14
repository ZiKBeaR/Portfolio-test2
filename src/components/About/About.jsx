import React from 'react'
import { Aboutcon, Bigtext, Bold, Container, Design, Emailaddress, Flexbeetwen, Hello, Info, Language, Large, Left, Message, Nameage, Procent, Progres, Rectanglephoto, Right, Skill, Specialist, User, Userdate, Userinfo } from './style'
import rectanglephoto from '../../assets/rectanglephoto.png'
// import rectangleback from '../../assets/rectangleback.png'
// import rectangleup from '../../assets/rectangleup.png'
import procent from '../../assets/procent.png'



const About = () => {
  return (
    <Container id='about'>
    
      <Aboutcon>
        <Bigtext>About</Bigtext>
        <Info>
          <Left>
            {/* <Rectangleback src={rectangleback}></Rectangleback> */}
            <Rectanglephoto src={rectanglephoto}></Rectanglephoto>
            {/* <Rectangleup src={rectangleup}></Rectangleup> */}
          </Left>
          <Right>
            <Hello>Hello!</Hello>
            <Specialist>Web designer, Graphic designer, Motion designer.</Specialist>
            <Message>Wide range option of furbitures crafted using the brst selected wood in the city so that it makes your home look more elegant and modern</Message>
            <User>
              <Nameage>
                <Userinfo>Name : <Userdate>Andriano Smith</Userdate> </Userinfo>
                <Userinfo>Age : <Userdate>31</Userdate> </Userinfo>
              </Nameage>
              <Emailaddress>
                <Userinfo>Email : <Userdate>mail@gmail.com</Userdate> </Userinfo>
                <Userinfo>Address : <Userdate>Ave 11, New York, USA</Userdate> </Userinfo>
              </Emailaddress>
            </User>
          </Right>
        </Info>
      </Aboutcon>

      {/* ----------------------------------------skills----------------------------- */}

      <Skill>

        <Design>
          <Bold>Design skills</Bold>
            <Flexbeetwen><Large>Web design</Large><Procent>85%</Procent></Flexbeetwen>
            <Progres src={procent}></Progres>
            <Flexbeetwen><Large>Graphic design</Large><Procent>85%</Procent></Flexbeetwen>
            <Progres src={procent}></Progres>
            <Flexbeetwen><Large>Motion design</Large><Procent>85%</Procent></Flexbeetwen>
            <Progres src={procent}></Progres>
        </Design>
        
        <Language>
          <Bold>Language skills</Bold>
          <Flexbeetwen><Large>English</Large><Procent>85%</Procent></Flexbeetwen>
          <Progres src={procent}></Progres>
          <Flexbeetwen><Large>Russian</Large><Procent>85%</Procent></Flexbeetwen>
          <Progres src={procent}></Progres>
          <Flexbeetwen><Large>Uzbek</Large><Procent>85%</Procent></Flexbeetwen>
          <Progres src={procent}></Progres>
        </Language>

      </Skill>

    </Container>
  )
}

export default About