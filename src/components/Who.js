import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './style/Who.css'

export default function Who(){
  const location = useLocation();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.remove('hidden');
              entry.target.classList.add('show');
              observer.unobserve(entry.target);
            }
          });
        });
    
        const targets = document.querySelectorAll('.who');
        targets.forEach(box => observer.observe(box));
    
        return () => {
          targets.forEach(box => observer.unobserve(box));
        };
    
      }, []);

      if (location.pathname === "/"){
        return (
          <section className="who-container">
        <div className="who hidden">
          <h2>Who We Are</h2>
          <p>GMMA is a network of healthcare professionals and students who partner together to further God's glory through medical mission trips. GMMA members and Christian Healthcare Professionals strive to TEACH and CARE for the well-being of the WHOLE PERSON in Mind, Body, and Spirit. </p>
        </div>
        </section>
        );
      }

      return (
        <section className="who-container">
          <div className='who hidden'>
          <p 
          style={{
            maxWidth: '800px', 
            fontSize: '3rem',
            boxShadow:'0 6px 12px rgba(0, 0, 0, 0.1',
            padding: '2rem',
            margin: 'auto'}}>
            <span style={{color:"#0077cc "}}> Global </span>  is our destination. <br/>
            <span style={{color:"#0077cc "}}> Medical Mission </span>  is our DNA <br/>
            <span style={{color:"#0077cc "}}> Alliance </span>  is our strategy
            </p>

            <p>Our focus is to awaken and mobilize Christ-passionate healthcare workers to join in God’s Kingdom work, and to network with others who are already in the mission fields.</p>
          </div>
        </section>
      )
}