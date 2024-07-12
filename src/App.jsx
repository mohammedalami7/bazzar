import Header1 from './components/1-Header/header1';
import Header2 from './components/1-Header/header2';
import Hero from './components/2-hero/hero';
import Iconsection from './components/2-hero/iconsection';
import Main from './components/3-main/main';
import { CartProvider } from './components/1-Header/carpovider';
import Footer from './components/4-footer/footer';
import  { useEffect, useState } from 'react';

export default function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 1000) {
        setScroll(true); 
      } else {
        setScroll(false);
      }
    });
  }, []); 

  return (
    <CartProvider>
      <div className='container'>
        <div className="bigHeader" style={{ backgroundColor: 'white' }} id='up'>
          <Header1 />
          <Header2 />
        </div>
        <Hero />
        <Iconsection />
        <Main />
        <Footer />

        {scroll &&
          <a href="#up" className='icon-chevron-thin-down' id='scroling2'></a>
        }
      </div>
    </CartProvider>
  );
}

