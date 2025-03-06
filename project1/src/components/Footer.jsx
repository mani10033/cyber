import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faPhone,faLocation } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faInstagram,faTwitter,faLinkedinIn,faYoutube} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <section className='footer-section'>
          <div className='footer-container'>
                <div className='footer-contents'>
                       <div className='footer-content'>
                        <p>The training and placement division of <br />
                           WHY Global Services,started in the UK in 
                            2009 to provide dissertation support  <br />
                            and technical training for UK students. 
                             In 2010, it relocated to India and  <br />
                             expanded to offer comprehensive education 
                              services.</p>
                              <div className='footer-icons'>
                                <a href=""> <FontAwesomeIcon icon={faFacebook} /></a>
                                <a href=""> <FontAwesomeIcon icon={faInstagram} /></a>
                                <a href=""> <FontAwesomeIcon icon={faYoutube} /></a>
                                <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                <a href=""> <FontAwesomeIcon icon={faTwitter} /></a>
                                 
                       </div>
                       
                       </div>

                      
                       <div className='footer-links'>
                       {/* <h3>Quick Links</h3> */}
                       
                                   <div className='footer-link'>

                                       <ul>
                                        <li>About us</li>
                                        <li>News</li>
                                        <li>Testimonal</li>
                                        <li>Contactus</li>
                                        <li>Gallery</li>
                                       </ul>
                                   </div>
                                   <div className='footer-link'>
                                       <ul>
                                        <li>Course</li>
                                        <li>Events</li>
                                        <li>Blogs</li>
                                        <li>Jobs</li>
                                        <li>MOUs</li>
                                       </ul>
                                   </div>
                       </div>
                        <div className='footer-time'>
                                 <div className='footer-locate'>
                               <p href="">  <FontAwesomeIcon icon={faLocation} /> 3ʳᵈ Floor, New No.  <br />
                                75, 77 & 79, Lohmanradhri Towers,  <br />
                                 Pantheon Road, Egmore, <br />
                                  Chennai, Tamilnadu, 600008.</p>
                               <p href="">  <FontAwesomeIcon icon={faPhone} /> +91 6374816443</p> 
                               <p href="">  <FontAwesomeIcon icon={faEnvelope} /> cyber@gmail.com</p> 
                              

                               <ul>
                                <li>MON - SAT : 10 AM - 7 PM</li>
                                <li>SUN : Closed (Holiday)</li>
                               </ul>
                                 </div>
                        </div>



                </div>
          </div>

          <div className='footer-terms'>
                  <div className='footer-term'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                  </div>
                  <div className='footer-term'>
                    <p>© 2024 CYBER.</p>
                    <p>All rights reserved.</p>
                  </div>
                  
          </div>

          <div>
            
          </div>
    </section>
  )
}

export default Footer