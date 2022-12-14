import styled from "styled-components";

export const Container = styled.div`
`

export const Aboutcon = styled.div`
background: #1E1E1E;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 2%;
padding-bottom: 10%;
`

export const Bigtext = styled.div`
font-weight: 700;
font-size: 24px;
line-height: 29px;
letter-spacing: 0.1em;
`
export const Info = styled.div`
display: flex;
/* align-items: center; */
/* justify-content: center; */



@media only screen and (max-width: 500px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`

export const Left = styled.div`
display: flex;
/* align-items: center; */
/* justify-content: left; */


@media only screen and (max-width: 425px) {
  display: flex;
  align-items: center;
  justify-content: center;
}
`
export const Rectanglephoto = styled.img`
box-sizing: border-box;
margin-top: 10%;

@media only screen and (max-width: 1440px) {
  margin-left: 10%;
}
@media only screen and (max-width: 768px) {
  Width: 234px;
  Height: 302px;
}
`
// export const Rectangleback = styled.img`
// position: absolute;
// left: 4%;
// top: 78%;
// `
// export const Rectangleup = styled.img`
// position: absolute;
// left: 6%;
// top: 82%;
// `

export const Right = styled.div`
margin-left: 10%;
margin-top: 10%;

@media only screen and (max-width: 1024px) {
  margin-left: 6%;
  margin-top: 5%;
}
@media only screen and (max-width: 768px) {
  margin-top: 3%;
}
`
export const Hello = styled.div`
font-weight: 700;
font-size: 48px;
line-height: 59px;
margin-bottom: 1%;
`
export const Specialist = styled.div`
font-weight: 400;
font-size: 36px;
line-height: 43px;
margin-bottom: 1%;
`
export const Message = styled.div`
font-weight: 400;
font-size: 18px;
line-height: 150%;
margin-top: 1%;
margin-bottom: 3%;

@media only screen and (max-width: 1024px) {
 width: 90%;
}
`
export const User = styled.div`
display: flex;

@media only screen and (max-width: 555px) {
  display: flex;
  flex-direction: column;
}
`
export const Nameage = styled.div`
flex: 1;
`
export const Emailaddress = styled.div`
flex: 1;
`
export const Userinfo = styled.div`
display: flex;
align-items: center;
justify-content: left;
font-family: 'Montserrat';
font-weight: 600;
font-size: 24px;
line-height: 150%;
margin-bottom: 3%;


@media only screen and (max-width: 1024px) {
  font-size: 18px;
}
@media only screen and (max-width: 768px) {
  font-size: 14px;
}
@media only screen and (max-width: 425px) {
  font-size: 22px;
}
@media only screen and (max-width: 320px) {
  font-size: 20px;
}
`
export const Userdate = styled.div`
display: flex;
font-family: 'Montserrat';
font-weight: 600;
font-size: 18px;
line-height: 150%;
letter-spacing: 1px;
color: grey;

margin-left: 5%;

@media only screen and (max-width: 1215px) {
  font-size: 13px;
}
@media only screen and (max-width: 768px) {
  font-size: 12px;
}
@media only screen and (max-width: 425px) {
  font-size: 16px;
}
@media only screen and (max-width: 320px) {
  font-size: 14px;
}
`

// ----------------------------------skills---------------------

export const Skill = styled.div`
background: #212121;
display: flex;
align-items: center;
justify-content: center;
padding-left: 15%;
padding-bottom: 5%;

@media only screen and (max-width: 918px) {
  display: flex;
  flex-direction: column;
  padding-left: 0;
}
`

export const Design = styled.div`
flex: 1;
margin-top: 5%;
`
export const Language = styled.div`
flex: 1;
margin-top: 6%;
`
export const Bold = styled.div`
font-weight: 600;
font-size: 24px;
line-height: 29px;
margin-bottom: 4%;
`

export const Flexbeetwen = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 466px;


@media only screen and (max-width: 1215px) {
  width: 366px;
}
@media only screen and (max-width: 425px) {
  width: 266px;
}
`

export const Large = styled.div`
font-weight: 400;
font-size: 24px;
line-height: 29px;
margin-top: 5%;
`
export const Progres = styled.img`
margin-bottom: 1%;

@media only screen and (max-width: 1215px) {
  width: 366px;
}
@media only screen and (max-width: 425px) {
  width: 266px;
}
`


export const Procent = styled.div`
font-weight: 600;
font-size: 24px;
line-height: 29px;
`