import styled from 'styled-components';
import 'swiper/swiper-bundle.css';


export const Header = styled.header`
  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: black;
    border-bottom: 0.1rem solid hsla(208, 100%, 48%, 1);;
    

    .logo{
      margin-left: 1rem;
    }
    .cart{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
     
    }
    #span{
      
      padding-left:1rem;
      color: white;
      text-shadow: 1px 1px 0 #41A3BE,2px 2px 0 #41A3BE;
  
    }
    
  }
`
export const Container = styled.div`
  max-width: 100%;
  height: auto;
  margin: auto;
 

  section {
    padding-left: 2.1rem;
    padding-top: 1rem;
    height: 100vh;
    max-width: 100%;
    background: #41A3BE;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
 

    .product-content{
      max-width: min-content;
      display: grid;
      text-align: center;

      background: hsla(0, 0%, 0%, 0.8);
      color: #41A3BE;
      font: 600;
      font-family: sans-serif;
      font-weight: bold;

      border-radius: 1rem;
      padding: 0.5rem;
      height: 18.75rem;
    }
    img{
      border-radius: 1rem;
    }
.name{
  color: #41A3BE;
  text-shadow: 1px 1px 0 grey;
  background:black;
border-radius:1rem;
}
.description{
  padding: 0.2rem;
  text-shadow: 2px 2px 0 black;
}
    .price{
      color: white;
      font-size: larger;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      
      letter-spacing:0.3rem;
      text-shadow: 1px 1px 0 #41A3BE;
    
    }

    #button{
     background: #41A3BE;
     border-radius: 2rem;
     max-width: 100%;

     font-family: Verdana, Geneva, Tahoma, sans-serif;
     font-weight: bolder;
    }
    #button:hover{
      background: black;
      color: #41A3BE ;
    }
  }
`
export const Footer = styled.footer`

  .footer{
    
    border-top: 0.1rem solid hsla(208, 100%, 48%, 1);
    max-height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: black;
  }
    
`
