import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className='py-3'>
        <Container>
          <h1> Welcome to e - Shop</h1>
        </Container>
      </main>
      <Footer/>
    </React.Fragment>
  )
}

export default App;
