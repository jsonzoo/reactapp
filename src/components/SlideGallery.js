import './style/slide_gallery.css'


import fellowship from './assets/fellowship.JPG'
import prayer from './assets/prayer.JPG'
import fbe from './assets/fbe.jpg'
import global from './assets/pic_mission.jpg'
import worship from './assets/worship.JPG'

export default function Slide(){
    

    const galleryImages = [
        {
          src: fellowship,
          alt: 'P1',
          title: "FELLOWSHIP",
    
        },
        {
          src: prayer,
          alt: 'P2',
          title: "PRAYER",
    
        },
        {
          src: worship,
          alt: 'P3',
          title: "WORSHIP",
    
        },
        {
          src: fbe,
          alt: 'P4',
          title: "LOCAL",
    
        },
        {
          src: global,
          alt: 'P5',
          title: "GLOBAL",
        
        }
      ]

    return(
        <section className="hero2">
        {galleryImages.map((img, key) => (
        <div key={key} className="gallery-tile">
          <img src={img.src} alt={img.alt} />
          <div className="gallery-text">
            <h3>{img.title}</h3>
            </div>
      </div>
    ))}
        </section>
    )
}