import React from 'react'
import Img11 from '/src/images/img11.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



function Nav() {
    
    
  return (
   <section className="nav-section">
    <div className="nav-contain">

        <div className="nav-image">
            <img src={Img11} alt="logo" />
            <h3>Cyber Security</h3>
            <p>Explore <FontAwesomeIcon className="nav-icon" icon={faChevronCircleDown}></FontAwesomeIcon></p>
            </div>

        <div className="nav-content">
                <ul>
                    
         <li><a href="home">Home</a></li>
          <li><a href="Overview">Overview</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Tool</a></li>
          <li><a href="#">Contact </a></li>
          <button  className='nav-but'> <Link to='/appl'>Get A Quote</Link> </button>
                </ul>
                  
        </div>

    </div>
    
   </section>

  )
}

export default Nav