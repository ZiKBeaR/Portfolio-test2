import styled from "styled-components";

export const Container = styled.div`
`

export const Navbarcon = styled.div`
  display: flex;
  background-color: #212121;
  padding: 0.5% 1%;
  

  .hamburger {
  display: none;
}


@media only screen and (max-width: 940px) {
  
  position: fixed;
  width: 100%;  
  top: 0;

  .hamburger {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1%;
  }


}
`
 export const Left = styled.div`
 flex: 1;
 padding: 1%;
 padding-left: 2%;
 display: flex;
 align-items: center;
 justify-content: left;
 `

 export const Logo = styled.img`
  :hover{
    cursor: pointer;
    transform: scale(1.05);
 }
 @media only screen and (min-width: 1921px) {
 width: 70px;
 height: 70px;  
}
 @media only screen and (max-width: 1024px) {
 width: 50px;
 height: 50px;  
}
@media only screen and (max-width: 425px) {
 width: 35px;
 height: 35px;  
}
 `

 export const Right = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding-right: 5%;

:hover {
  cursor: pointer;
  
}

@media only screen and (max-width: 940px) {
  display: none;

  .nav-menu {
      position: fixed;
      right: -100%;
      top: 11%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: darkgrey;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: 0.4s;
      margin: 0.5rem;
      font-size: 1.8rem;
      justify-content: center;

      
  }

  .liclass {
    margin: 3%;
    border: 2px solid red;
    cursor: pointer;
  }  

  .nav-menu.active {
      right: 0;
  } 

  .nav-items {
    margin: 3%;
    border: 2px solid red;
    cursor: pointer;
}

}
 `

 export const Pagename = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  :hover{
    cursor: pointer;
    font-weight: 700;
  }

  @media only screen and (min-width: 1921px) {
  font-size: 23px;  
}
@media only screen and (max-width: 1024px) {
  font-size: 15px;  
}
@media only screen and (max-width: 768px) {
  display: none;
}
`


