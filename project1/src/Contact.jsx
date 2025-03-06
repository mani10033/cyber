import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUser,faPhone,faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <section className='cont-section'>
        <div className='cont-container'>
               <div className='cont-forms'>
                  <h2>Ask for a Quote</h2>
                  <div className='cont-input'>
                  <div className='cont-input1'><input type="text" placeholder='Name*'  /></div>
                  <div className='cont-input1'><input type="text" placeholder='Phone Number*' /></div>
                  <div className='cont-input1'><input type="text" placeholder='Email*' /></div>
                  <div className='cont-input1'><input type="text" placeholder='Company Name' /></div>
                  <div className='cont-input2'><input type="text" placeholder='Message (Optional)' /></div>
                </div> 
                 <div className='cont-content'>
                          <p>The information you provide shall be processed by The Knowledge Academy – a professional  <br />
                          training organisation. Your data shall be used by a member of staff to contact you regarding your enquiry.</p>

                            <p>Please click <span>here</span> for privacy policy.</p> 

                            <p> <input type="checkbox" />By submitting this enquiry, I agree to be contacted in the most  suitable manner (by phone or email) in order to respond to my enquiry.</p> <br />
                            
                           

                             <p> <input type="checkbox"  /> Click here to sign up for our email marketing, offers, and discounts.</p>  


                             <button className='cont-btn'>Submit</button>
                 </div>
             </div>
             <div className='cont-side'>
             <h2>Feel Free to Contact Us</h2>
              <div className='cont-side1'>  
                
                    <div className='cont-'>
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    </div>
                    <div className='cont-p'>
                        <p>Phone:-</p>
                        <p>+918037244591</p>
                       </div>
                       </div>

                       <hr />

                       <div className='cont-side1'>  
                
                <div className='cont-'>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </div>
                <div  className='cont-p'>
                    <p>Phone:-</p>
                    <p>+918037244591</p>
                   </div>
                   </div>

                   <hr />


                   <button className='cont-btn1'> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>Enquire for More Information </button>

                       
                </div>
                


              
        </div>
    </section>
  )
}

export default Contact