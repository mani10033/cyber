import React from 'react'
import Img15 from '/src/images/img16.png'
import Img16 from '/src/images/img17.png'
import Img17 from '/src/images/img18.png'
import Img18 from '/src/images/img19.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUsers,faPlus,faArrowRight} from '@fortawesome/free-solid-svg-icons'



function Class() {
 
  return (
    <section className='class-section'>
        <div className='class-container'>
        <h1>Our Available Delivery Methods</h1>
      
            <div className='class-boxes'>
             

              <div className='class-box'>
                <img src={Img15} width={80}  alt="" />
                <h3>Classroom Training</h3>
                <h4>Enquire Now <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></h4> 
              </div>
              <div className='class-box'>
                <img src={Img16}  width={60} alt="" />
                <h3>Online-Led Training</h3>
                <h4>Enquire Now <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></h4>
              </div>
              <div className='class-box'>
                <img src={Img17} width={60} alt="" />
                <h3>Online Self Training</h3>
                <h4>Enquire Now  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></h4>
              </div>
              <div className='class-box'>
                <img src={Img18} width={63} alt="" />
                <h3>Onsite - Training</h3>
                <h4>Enquire Now <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></h4>
              </div>
            </div >



            <div className='class-banner'>
            <h2>Our Amazing Facts and Figures</h2>
            <p class="banner-p">We are the largest global training provider with a brilliant track record. Our amazing statistics
                 are something to make us very proud of our work.
           </p>
           <div className='class-icons'>
           <div className='class-icon'>
            <span>100  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></span> 
            <p>Courses Running Daily</p>
           </div>
           <div className='class-icon'>
            <span>490 <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> </span> 
            <p>Locations Worldwide</p>
           </div>
           <div className='class-icon'>
            <span>2M  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></span> 
            <p>Professionals Trained</p>
           </div>
           <div className='class-icon'>
            <span>2K  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></span> 
            <p>Certified Instructors</p>
           </div>
           </div>

            </div>
        </div>
    </section>
  )
}

export default Class