import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Who from "./Who.js";

import React, { useEffect, useState } from "react";


import background from "./assets/binghamton.jpg"
import forest from "./style/about-img/forest.avif"

import img1 from "./style/about-img/img1.JPG"
import img2 from "./style/about-img/img2.JPG"
import img3 from "./style/about-img/img3.jpg"
import img4 from "./style/about-img/img4.jpg"
import img5 from "./style/about-img/img5.jpg"
import img6 from "./style/about-img/img6.jpg"


import icon1 from "./style/icons/image1.png"
import icon2 from "./style/icons/image2.png"
import icon3 from "./style/icons/image3.png"
import icon4 from "./style/icons/image4.png"
import icon5 from "./style/icons/image5.png"



import './style/About.css';

export default function About(){
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

    const targets = document.querySelectorAll('.value-box, .word-box');
    targets.forEach(box => observer.observe(box));

    return () => {
      targets.forEach(box => observer.unobserve(box));
    };

    

  }, []);


  const [mainImg, setMainImg] = useState(img1);
  const [isFading, setIsFading] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (newImg) => {
    setIsHovering(true);
    setIsFading(true);
    setTimeout(() => {
      setMainImg(newImg);
      setIsFading(false);
    }, 300);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setTimeout(() => {
      if (!isHovering) {
        setIsFading(true);
        setTimeout(() => {
          setIsFading(false);
        }, 300);
      }
    }, 50);
  };


  const valueBoxes = [
    
    { label: '01. PRAYER', img: img2, icon: icon1 },
    { label: '02. COMPASSION', img: img3, icon: icon2 },
    { label: '03. MENTORSHIP', img: img4, icon: icon3 },
    { label: '04. HEALING', img: img5, icon: icon4 },
    { label: '05. MISSION', img: img6, icon: icon5 }
  ];

  const visionData = [
    {
      key: 'title',
      label: 'Our Vision Statement',
      position: '0%',
      content: null,
    },
    {
      key: 'help',
      label: 'HELP',
      position: '25%',
      content: 'churches to connect and partner in medical mission work.',
    },
    {
      key: 'empower',
      label: 'EMPOWER',
      position: '45%',
      content:
        'the next generation of healthcare professionals to live out missional life through mentoring, training, supporting, and providing mission opportunities.',
    },
    {
      key: 'awaken',
      label: 'AWAKEN',
      position: '65%',
      content:
        'mission-minded healthcare professionals to fulfill the Great Commission.',
    },
    {
      key: 'link',
      label: 'LINK',
      position: '85%',
      content:
        'healthcare professionals with mission partners for mobilization.',
    },
  ];

return(
    <>
      <header style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '500px'
      }}>
          <Navbar />
      </header>

      
      <div className="about">
        <p>
          GMMA Binghamton</p>
            <h1 className="about text">
              About Us
            </h1>
      </div>

      <section className="hero-container">
            <div className="section-block key-verse">
              <h2>Key Verse</h2>
              <p id="verse">Arise, shine, for your light has come, and the glory of the LORD rises upon you.</p>
              <span id="verse-ref">Isaiah 60:1 NIV</span>
              
            </div>
          
            <div className="section-block mission-statement">
              <h2>Mission Statement</h2>
              <p>Living Out the Christ Centered Missional Life</p>
            </div>
      </section>

      <Who />
      
      <section className="core-values">
      <div className="values">
        <div className="col1">
          <h1 className="value-box title"
          >Our Core Values</h1>

          {valueBoxes.map((box, index) => (
          <div
          key={index}
          className="value-box"
          onMouseEnter={() => handleMouseEnter(box.img)}
          onMouseLeave={handleMouseLeave}
          >
            <img src={box.icon} alt={`${box.label} Icon`} className="icon" />
            <span>{box.label}</span>
            </div>
            ))}
        </div>

        <div className="picture">
          <div className="gallery1">
            <div className="image-wrapper" data-index="0">
              <img
                id="mainImg"
                src={mainImg}
                className={`photo ${isFading ? 'fade-out' : ''}`}
                alt="Main"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="vision">
      <div className="vision-box">
        {visionData.map(({ key, label, position, content }) => (
          <div
            key={key}
            className={`word-box ${key}`}
            style={{
              backgroundImage: `url(${forest})`,
              backgroundPosition: position,
              backgroundSize: 'cover',
            }}
          >
            {label}
            {content && <p>{content}</p>}
          </div>
        ))}
      </div>
    </section>

    

    <Footer />
      
    </>
  );
    }