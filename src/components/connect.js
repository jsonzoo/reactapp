import Navbar from "./Navbar";
import Footer from "./Footer";
import "./style/connect.css";

import background from "./assets/events.JPG";
import pic from "./assets/_DSC8684.JPG"

export default function Connect(){
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

        <div className="connect-container">
            <div className="connect-hero">
                <h1 className="connect-title">Connect With Us!</h1>
            </div>
            
            <div className="eboard-section">
                <h2 className="eboard-title">Executive Board</h2>
                <p className="eboard-subtitle">Meet our team!</p>
                
                <div className="eboard-grid">
                    {/* President */}
                    <div className="member-card">
                        <div className="member-image">
                            <img src={pic} alt="President" />
                        </div>
                        <div className="member-info">
                            <h3 className="member-name">Caleb Hyungshin Kim</h3>
                            <p className="member-role">President</p>
                            <p className="member-bio">
                                Lol
                            </p>
                        </div>
                    </div>

                    {/* Vice President */}
                    <div className="member-card">
                        <div className="member-image">
                            <img src={pic} alt="Vice President" />
                        </div>
                        <div className="member-info">
                            <h3 className="member-name">Jason Zhu</h3>
                            <p className="member-role">Vice President</p>
                            <p className="member-bio">
                                jzhu13@binghamton.edu
                            </p>
                        </div>
                    </div>

                     {/* Treasurer */}
                     <div className="member-card">
                        <div className="member-image">
                            <img src={pic} alt="Treasurer" />
                        </div>
                        <div className="member-info">
                            <h3 className="member-name">Yuheng Lin</h3>
                            <p className="member-role">Treasurer</p>
                            <p className="member-bio">
                               LOL
                            </p>
                        </div>
                    </div>

                    <div className="member-card">
                        <div className="member-image">
                            <img src={pic} alt="Fundraising Coordinator" />
                        </div>
                        <div className="member-info">
                            <h3 className="member-name">Angelina Kim</h3>
                            <p className="member-role">Fundraising Coordinator</p>
                            <p className="member-bio">
                               lols
                            </p>
                        </div>
                    </div>


                    {/* Public Relations Coordinator */}
                    <div className="member-card">
                        <div className="member-image">
                            <img src={pic} alt="Public Relations Coordinator" />
                        </div>
                        <div className="member-info">
                            <h3 className="member-name">Yoselin Tzic</h3>
                            <p className="member-role">Public Relations </p>
                            <p className="member-bio">
                             LOOOOL
                            </p>
                        </div>
                    </div>


                    {/* Secretary */}
                    <div className="member-card">
                        <div className="member-image">
                            <img src={pic} alt="Secretary" />
                        </div>
                        <div className="member-info">
                            <h3 className="member-name">Lucy Li</h3>
                            <p className="member-role">Secretary</p>
                            <p className="member-bio">
                                lols
                            </p>
                        </div>
                    </div>

                    {/* Intern */}
                    <div className="member-card">
                        <div className="member-image">
                            <img src={pic} alt="Intern" />
                        </div>
                        <div className="member-info">
                            <h3 className="member-name">Victoria Tjahaja</h3>
                            <p className="member-role">Intern</p>
                            <p className="member-bio">
                                lols
                            </p>
                            </div>
                    </div>


                    {/* Worship Leader */}
                    <div className="member-card">
                        <div className="member-image">
                            <img src={pic}alt="Worship Leader" />
                        </div>
                        <div className="member-info">
                            <h3 className="member-name">Anderson Kim</h3>
                            <p className="member-role">Worship Leader</p>
                            <p className="member-bio">
                                LO1
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="listserv-section"> 
                <h2 className="listserv-title">Email List</h2>
                <p className="listserv-subtitle">Join our mailing list to stay updated on events and announcements!</p>
                <div className="listserv-form">
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>

            <div className="contact-section">
                <h2 className="contact-title">Get In Touch</h2>
                <div className="contact-info">
                    <div className="contact-item">
                        <h3>Email</h3>
                        <p>gmma@binghamtonsa.org</p>
                    </div>
                    <div className="contact-item">
                        <a href="https://www.instagram.com/gmmabing/" target="_blank" rel="noopener noreferrer">
                            <h3>Instagram</h3>
                            <p>@gmmabing</p>
                        </a>
                    </div>
                    <div className="contact-item">
                        <h3>Meeting Times</h3>
                        <p>Mondays at 7:30 PM</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
  
    );
} 