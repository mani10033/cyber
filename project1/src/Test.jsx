import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUsers,faStar } from '@fortawesome/free-solid-svg-icons'


function Test() {
  return (
   <section className='test-section'>
       <div className='test-container'>
           
       <div className='test-contain'>
           <div className='test-back'>
               <h2 className='test-head'>What Our Clients Say About Us</h2>
          <div className='test-boxes'>
      <div className='test-box'>
                    <div className='test-icon'> <FontAwesomeIcon icon={faUsers} /></div>
                    <div className='test-icons'>
                    <div className='ratings'> 
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    
                    </div>
                    </div>
                    
                    <h6>Ben Cox</h6>
                    <p>Cyber Security Course designed to equip individuals with the essential <br />
                        skills and knowledge to safeguard digital assets. Our program covers <br />
                         a range of topics, including threat detection, vulnerability assessment, <br />
                          and incident response, tailored to both beginners and advanced learners. <br />
                          With hands-on exercises and real-world case studies, participants gain  <br />
                          practical experience in identifying and mitigating cyber threats. Led  <br />
                          by industry experts, our training ensures participants stay updated  <br />
                          with the latest techniques and best practices in cyber defense.</p>
                 </div>
                 <div className='test-box'>
                 <div className='test-icon'> <FontAwesomeIcon icon={faUsers} /></div>
                 <div className='test-icons'>
                    <div className='ratings'> 
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    
                    </div>
                    </div>
                    
                    <h6>Milan Kelly</h6>
                    <p>Cyber Security Course designed to equip individuals with the essential  <br />
                        skills and knowledge to safeguard digital assets. Our program covers <br />
                         a range of topics, including threat detection, vulnerability assessment, <br />
                          and incident response, tailored to both beginners and advanced learners. <br />
                          With hands-on exercises and real-world case studies, participants gain  <br />
                          practical experience in identifying and mitigating cyber threats. Led  <br />
                          by industry experts, our training ensures participants stay updated  <br />
                          with the latest techniques and best practices in cyber defense.</p>
                 </div>
                 </div>
           </div>
           </div>
       </div>
   </section>
  )
}

export default Test