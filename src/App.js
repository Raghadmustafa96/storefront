import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Products from './component/Products.js';

function App() {
  return (
    <>
      <Header />
      <main>
        <Products />
      </main>
      <Footer />
  </>
  );
}

export default App;
