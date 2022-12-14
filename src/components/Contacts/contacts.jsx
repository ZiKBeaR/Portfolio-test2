import React from 'react'
import { Bold, Contactcon, Container, Email, Endbar, Follow, Icons, Left, Logos, Mapp, Message, Name, Right, Send } from './style'
import map from '../../assets/map.png'
import { useRef, useState } from 'react'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import behance from '../../assets/behance.png'
import instagramm from '../../assets/instagramm.png'
import youtube from '../../assets/youtube.png' 

const Contact = () => {

  const [inputs, setInputs] = useState({username: '', nickname: '', massage: '',});

  const nameInput = useRef();
  const emailInput = useRef();
  const massageInput = useRef();

  const {username, nickname, massage} = inputs;

  const onChange = e => {
    const {name, value} = e.target;
      setInputs({...inputs, [name]: value,})
  }

const onReset = () => {
 

  if(username.length < 1){
    nameInput.current.focus();
    return
  }

  if(nickname.length < 5 ) {
    emailInput.current.focus();
    return
  }

  if(massage.length < 5 ) {
    massageInput.current.focus();
    return
  }

  setInputs({
    username: '',
    nickname: '',
    massage: '',
  })
}

  return (
    <Container id='contact'>
      <Contactcon>
        <Left>
          <Bold>Get in touch.</Bold>
          <Name type={'text'} placeholder='Name' name='username' ref={nameInput} onChange={onChange} value={username}></Name>
          <Email type={'email'} placeholder="Email" name='nickname' ref={emailInput} onChange={onChange} value={nickname}></Email>
          <Message placeholder='Massage' name='massage' ref={massageInput} onChange={onChange} value={massage}></Message>
          <Send onClick={onReset}>Send message</Send>
        </Left>
        <Right>
          <a href='https://www.google.co.kr/maps/place/Storeling/data=!3m1!4b1!4m5!3m4!1s0x35660c1fe7657383:0xc327dc29e4e081e0!8m2!3d35.8204604!4d128.7564883?hl=ko' rel='noopener' ><Mapp src={map}></Mapp></a>
        </Right>
      </Contactcon>

{/* -----------------------------Endbar------------------------- */}

      <Endbar>
        <Follow>Follow me</Follow>
        <Logos>
          <a href='https://twitter.com/?lang=en' rel='noopener'><Icons src={twitter}></Icons></a>
          <a href='https://www.facebook.com/Meta/' rel='noopener'><Icons src={facebook}></Icons></a>
          <a href='https://www.behance.net/' rel='noopener'><Icons src={behance}></Icons></a>
          <a href='https://www.instagram.com/' rel='noopener'><Icons src={instagramm}></Icons></a>
          <a href='https://www.youtube.com/' rel='noopener'><Icons src={youtube}></Icons></a>
        </Logos>
      </Endbar>

    </Container>
  )
}

export default Contact