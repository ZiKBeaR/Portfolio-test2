import styled from 'styled-components'

export const Container = styled.div``

export const Testimonialcon = styled.div`
background: #212121;
display: flex;
flex-direction: column;
padding: 5% 0%;
`
export const Bold = styled.div`
  font-weight: 700;
font-size: 24px;
line-height: 29px;
letter-spacing: 0.1em;
text-align: center;
margin-bottom: 4%;
`
export const Centertext = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Normal = styled.div`
width: 40%;
font-weight: 400;
font-size: 24px;
line-height: 150%;
margin-bottom: 2%;

@media only screen and (max-width:1440px) {
  width: 80%;
}
`
export const Light = styled.div`
width: 40%;
display: flex;
font-weight: 700;
font-size: 24px;
line-height: 150%;
display: flex;
align-items: center;

@media only screen and (max-width:1440px) {
  width: 80%;
}
`
export const Small = styled.div`
margin-left: 7%;
color: grey;
font-weight: 500;
font-size: 18px;
line-height: 150%;
`

// export const Up = styled.img`
// box-sizing: border-box;
// position: absolute;
// left: 20%;
// top: 280%;
// color: #584949;
// opacity: 0.9;
// `
// export const Down = styled.img`
// box-sizing: border-box;
// position: absolute;
// left: 75%;
// top: 295%;
// color: #584949;
// opacity: 0.9;
// `
// export const Btn = styled.div``
// export const Leftbtn = styled.div`
// box-sizing: border-box;
// position: absolute;
// left: 61%;
// top: 295%;
// :hover {
//   cursor: pointer;
//   transform: scale(1.05);
// }
// `
// export const Rightbtn = styled.div`
// box-sizing: border-box;
// position: absolute;
// left: 66%;
// top: 295%;
// :hover {
//   cursor: pointer;
//   transform: scale(1.05);
// }
// `
// export const Scrol = styled.img`

// `