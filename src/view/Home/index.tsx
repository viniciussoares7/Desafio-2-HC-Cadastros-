import React, { useState, useEffect } from 'react';

import Cart from '../../assets/cart.png'
import Logo from '../../assets/logo.png'

import { Container, Header, Footer } from './style';

import api from '../../services/api';

interface IProduct {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}



const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);


  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  useEffect(() => {
    localStorage.setItem(`@cart`, JSON.stringify(cart));
  }, [cart]);


  const handleCart = (index: number) => {
    let product = data[index]
    setCart(cart => [...cart, product]);
  }

  return (
    <>
      <Header>

        <div className="nav">
          <div className="logo">
            <img src={Logo} alt="LOGO" width="100px" height="auto" />
          </div>
          <div className="cart">
            <span id="span"> {cart.length} </span>
            <img src={Cart} alt="shopcart" width="50px" height="auto" />
          </div>
        </div>
      </Header>

      <Container>
        <section>
          {data.map((prod, index) => (
            <div className="product-content" key={prod.id}>
              <img src={prod.photo} alt="iphone" width="200" height="200" />
              <h4 className="name">{prod.name}</h4>
              <span className="description">{prod.description}</span>
              <h6 className="price">R${prod.price}</h6>
              <button id="button" onClick={() => handleCart(index)}> Adicionar ao carrinho</button>
            </div>
          ))}
        </section>
      </Container>

      <Footer>
        <div className="footer">
          <img src={Logo} alt="LOGO" width="50px" height="auto" />
          <img src={Logo} alt="LOGO" width="50px" height="auto" />
          <img src={Logo} alt="LOGO" width="50px" height="auto" />
          <img src={Logo} alt="LOGO" width="50px" height="auto" />
          <img src={Logo} alt="LOGO" width="50px" height="auto" />
          <img src={Logo} alt="LOGO" width="50px" height="auto" />
          <img src={Logo} alt="LOGO" width="50px" height="auto" />
          <img src={Logo} alt="LOGO" width="50px" height="auto" />
          <img src={Logo} alt="LOGO" width="50px" height="auto" />
          <img src={Logo} alt="LOGO" width="50px" height="auto" />
        </div>
      </Footer>
    </>
  );
}

export default Home;