import React from 'react'
import Img20 from '/src/images/img20.png'
import Img21 from '/src/images/img21.png'
import Img22 from '/src/images/img22.png'
import Img23 from '/src/images/img23.png'
import Img24 from '/src/images/img24.png'
import Img25 from '/src/images/img25.png'
import Img26 from '/src/images/img26.png'


function Key() {
  return (
    <section className='key-section'>
        <h1>Key Highlights</h1>
        <div className='key-container'>
            <div className='key-imges'>
                   <img src={Img20}   alt="" />
            </div>

            <div className='key-contents'>
                <div className='key-content'>
                       <img  className="key-img" src={Img21} alt="" />
                       <p>Placement Assistance</p>
                </div>
                <div className='key-content'>
                       <img  className="key-img" src={Img22} alt="" />
                       <p>Exclusive access to ACTE Job portal</p>
                </div>
                <div className='key-content'>
                       <img  className="key-img" src={Img23} alt="" />
                       <p>Mock Interview Preparation</p>
                </div>
                <div className='key-content'>
                       <img  className="key-img" src={Img24} alt="" />
                       <p>1 on 1 Career Mentoring Sessions</p>
                </div>
                <div className='key-content'>
                       <img  className="key-img" src={Img25} alt="" />
                       <p>Career Oriented Sessions</p>
                </div>
                <div className='key-content'>
                       <img  className="key-img" src={Img26} alt="" />
                       <p>Resume & LinkedIn Profile Building</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Key