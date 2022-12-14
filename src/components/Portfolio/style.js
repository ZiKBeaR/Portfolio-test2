import styled from "styled-components";

export const Container = styled.div`
text-align: center;
padding-top: 2%;
background: #1E1E1E;
padding-bottom: 3%;


@media only screen and (max-width: 425px) {
  padding-top: 5%;
}
`


export const Works = styled.div`
padding-top: 2%;
background: #1E1E1E;
display: grid;
 gap: 20px;
 grid-template-areas: 'a a a a';
flex-direction: column;
align-items: center;
justify-content: center;

@media only screen and (max-width: 1215px) {
  grid-template-areas: 'a a a';
}
@media only screen and (max-width: 918px) {
  grid-template-areas: 'a a';
}
@media only screen and (max-width: 590px) {
  grid-template-areas: 'a';
}
`


export const Bold = styled.div`
font-weight: 700;
font-size: 24px;
line-height: 29px;
letter-spacing: 0.1em;
margin-bottom: 1%;
`
export const Divlarge = styled.div`
display: grid;
grid-template-areas: 'a a a';
gap: 1% 3%;
align-items: center;
justify-content: center;
margin-bottom: 1%;


@media only screen and (max-width: 500px) {
  grid-template-areas: 'a';
}
`

export const Web = styled.div`
width: 100%;
font-weight: 400;
font-size: 24px;
line-height: 29px;
margin: 1% 3%;
border: 3px solid transparent;
:hover {
  cursor: pointer;
  border-bottom: 3px solid #FF3535;
}


@media only screen and (max-width: 425px) {
  font-size: 20px;
  margin-top: 10%;
}
`
export const Large = styled.div`
width: 100%;
font-weight: 400;
font-size: 24px;
line-height: 29px;
margin: 1% 3%;
border: 3px solid transparent;
:hover {
  cursor: pointer;
  border-bottom: 3px solid #FF3535;
}

@media only screen and (max-width: 500px) {
  display: none;
}
`

export const Test = styled.img`
:hover{
  cursor: pointer;
  transform: scale(1.05);
}
`
export const Appels = styled.img`
:hover{
  cursor: pointer;
  transform: scale(1.05);
}

@media only screen and (max-width: 1215px) {
  display: none;
}
`
export const Yellowtree = styled.img`
:hover{
  cursor: pointer;
  transform: scale(1.05);
}
@media only screen and (max-width: 1215px) {
  display: none;
}
`
