import Navbar from "./Navbar";
import Footer from "./Footer";
import Calendar from "./Calendar";

import background from "./assets/events.JPG";

import './style/Events.css'
export default function Events(){
    return(
        <>
        <header style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 20%',
              backgroundRepeat: 'no-repeat',
              height: '450px'
        }}>
            <Navbar />
        </header>

        <Footer />
        </>
        
    )
}