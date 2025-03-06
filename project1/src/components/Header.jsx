import React from 'react'
import Img2 from '/src/images/banner.png'
import { Link } from 'react-router-dom'
import Nav from '../Nav'




function Header() {
  return (
   <>
      
       <Nav />
       
    <section id='head-section'>
      
       <div className='head-container'>
          <div className='head-content'>
            <h3>Cyber Security Training</h3>
            <h1>Improve Workplace Safety 
                with Cyber Security</h1>
            <p>The Knowledge Academy is Globally Recognised  as the <br />
        Industry Leader in providing Cyber Security Training. <br/>Our ‘Cyber Security Expert Team’ comprises over 45<br/> leading professionals with more than 17 years of <br/>industry recognised experience in securing <br/>organisations IT infrastructure from various cyber-attacks.</p>
                <button className='head-but'><Link to='/offer'>offer40% Off Limited Time Offer</Link></button>     

          </div>
          <div className='head-img'>
                <img src={Img2} alt="" />
          </div>





       </div>
    </section>
    </>
  )
}

export default Header