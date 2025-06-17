import './style/Home_Gallery.css'

import conf1 from './assets/conference/conf1.jpg'
import conf2 from './assets/conference/conf2.jpg'
import conf3 from './assets/conference/conf3.jpg'
import conf4 from './assets/conference/conf4.jpg'

const images1 = [
  {src: conf1},
  {src: conf2},
  {src: conf3},
  {src: conf4}

];

const images2 = [
    {src: conf1},
    {src: conf2},
    {src: conf3},
    {src: conf4}
 

];

const images3 = [
  {src: conf1},
  {src: conf2},
  {src: conf3},
  {src: conf4}


];

export default function HomeGallery(){
    return (
        <div className="conf-container">

            <div className="conf-gal1">
            {images1.map((image, index) => (
          <div className="conf-item" key={index}>
            <img src={image.src} alt={image.alt} className="conf-img" />

          </div>
        ))}
        
            </div>
            <div className="caption">
              2024 Winter Honduras Missions Trip
            </div>
        
            <div className="conf-gal2">
            {images2.map((image, index) => (
          <div className="conf-item" key={index}>
            <img src={image.src} alt={image.alt} className="conf-img" />
         
          </div>
        ))}
            </div>
            <div className="caption">
              2024 GMMA National Conference!
            </div>
            
      </div>
    );
}