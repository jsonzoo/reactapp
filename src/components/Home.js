import Navbar from "./Navbar";
import Verse from './verse';
import Footer from './Footer'
import Who from "./Who";
import Slide from "./SlideGallery";
import HomeGallery from "./HomeGallery";

import background from './assets/background.png'

import './style/Home.css';

export default function Home(){

return(
    <>
    <header style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${background})`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        height: '450px'
      }}>
        <Navbar />
      </header>

      <main>
  

      <section className="hero">
          <div className="t">GLOBAL MEDICAL MISSIONS ALLIANCE</div>
          <Slide />
          <p className="t delay">@ Binghamton University </p>
       
      </section>
      <Who />
      <HomeGallery />

      



      
        
      
      <Verse />
      <Footer />

      </main>
      
    </>
  );
    }