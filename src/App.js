import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Products from './component/Products.js';
import SimpleCart from './component/Simplecart';


function App() {
  return (
    <>
      <Header />
      <SimpleCart />
      <main>
        <Products />
      </main>
      <Footer />
  </>
  );
}

export default App;
