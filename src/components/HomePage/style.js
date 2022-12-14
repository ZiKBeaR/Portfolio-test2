import styled from "styled-components";

export const Container = styled.div``

export const Homepagecon = styled.div`
background-color: #1E1E1E;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (max-width: 940px) {
  padding-top: 8%;
}

@media only screen and (max-width: 768px) {
  display: flex;
  flex-direction: column-reverse;
}

@media only screen and (max-width: 430px) {
  padding-top: 15%;
}
`

export const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding-left: 5%;
padding-top: 5%;
margin-top: 3%;
margin-bottom: 5%;

@media only screen and (max-width: 768px) {
 display: flex;
 align-items: center;
 justify-content: center;
}
`

export const Bigtext = styled.div`
font-family: 'Gilroy';
font-weight: 700;
font-size: 72px;
line-height: 89px;
width: 70%;
margin-bottom: 2%;
@media only screen and (min-width: 2170px) {
width: 50%;
}
@media only screen and (max-width: 1440px) {
width: 80%;
}
@media only screen and (max-width: 1550px) {
width: 90%;
}
@media only screen and (max-width: 1205px) {
width: 100%;
}
@media only screen and (max-width: 1085px) {
width: 100%;
font-size: 70px;
}
@media only screen and (max-width: 1055px) {
width: 100%;
font-size: 60px;
}
@media only screen and (max-width: 1024px) {
  width: 100%;
  font-size: 65px;
  line-height: 69px;
}
@media only screen and (max-width: 980px) {
  width: 100%;
  font-size: 55px;
}
@media only screen and (max-width: 830px) {
  width: 100%;
  font-size: 50px;
}
 @media only screen and (max-width: 768px) {
  width: 60%;
  text-align: center;
}
@media only screen and (max-width: 628px) {
  width: 70%;
}
@media only screen and (max-width: 539px) {
  width: 80%;
}
@media only screen and (max-width: 425px) {
  width: 80%;
  font-size: 45px;
  line-height: 59px;
}
@media only screen and (max-width: 375px) {
  width: 90%;
  font-size: 35px;
  line-height: 49px;
}
@media only screen and (max-width: 320px) {
  width: 100%;
  font-size: 34px;
  line-height: 39px;
}
`
export const Smalltext = styled.div`
font-weight: 400;
font-size: 18px;
line-height: 150%;
width: 50%;

@media only screen and (max-width: 1024px) {
 width: 80%;
}
@media only screen and (max-width: 768px) {
 text-align: center;
 width: 70%;
}
@media only screen and (max-width: 375px) {
  width: 80%;
}
@media only screen and (max-width: 320px) {
  width: 90%;
}
`
export const Btns = styled.div`
display: flex;
margin-top: 3%;
margin-bottom: 4%;
color: #FF3535;

.link{
  padding: 2% 4%;
border: 2px solid #FF3535;
border-radius: 50px;
font-family: 'Montserrat';
font-weight: 700;
font-size: 18px;
line-height: 150%;
color: #FF3535;
:hover{
  cursor: pointer;
  background: #FF3535;
color: white;
}

@media only screen and (max-width: 375px) {
  margin-top: 3%;
}
}

@media only screen and (max-width: 768px) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
@media only screen and (max-width: 375px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`

export const Redbtn = styled.div`
display:flex;
align-items: center;
justify-content: center;
padding: 2% 4%;
border: 2px solid #FF3535;
border-radius: 50px;
font-family: 'Montserrat';
font-weight: 700;
font-size: 18px;
line-height: 150%;
margin-right: 5%;
color: #FF3535;
:hover{
  cursor: pointer;
  background: #FF3535;
border-radius: 50px;
color: white;
}

@media only screen and (max-width: 375px) {
  margin-left: 5%;
}
`
export const Borderredbtn = styled.div`
display:flex;
align-items: center;
justify-content: center;
`

export const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
`
export const Foto = styled.img`
box-sizing: border-box;
@media only screen and (max-width: 1440px) {
  width: 389px;
  height: 388px;
}
@media only screen and (max-width: 1024px) {
  width: 289px;
  height: 288px;
}
@media only screen and (max-width: 768px) {
  width: 489px;
  height: 488px;
  margin-top: 10%;
}
@media only screen and (max-width: 500px) {
  width: 409px;
  height: 408px;
  margin-top: 10%;
}
@media only screen and (max-width: 425px) {
  width: 359px;
  height: 358px;
}
@media only screen and (max-width: 375px) {
  width: 269px;
  height: 268px;
}
@media only screen and (max-width: 320px) {
  width: 239px;
  height: 238px;
}
`

// export const Leftellipse = styled.img`
// box-sizing: border-box;
// `

// export const Rightellipse = styled.img`
// box-sizing: border-box;
// `

