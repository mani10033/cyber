import React from 'react'
import Img5 from '/src/images/img2.png'
import Img6 from '/src/images/img3.png'
import Img7 from '/src/images/img4.png'
import Img8 from '/src/images/img5.png'
import Img9 from '/src/images/img6.png'
import Img10 from '/src/images/img7.png'


function Tools() {
  return (
    <section className='tool-section'>
        <h2>Programming Tools</h2>
        <div className='tool-container'>
            
            <div className='tool-box'>
                    <p className='text-grade'>WireShark</p>
                    <img src={Img5} alt="" />
            </div>
            <div className='tool-box'>
                    
                    <p className='text-grade'>Burpsuite</p>
                    <img src={Img6} alt="" />
            </div>
            <div className='tool-box'>
                    
                    <p className='text-grade'>Maltego</p>
                    <img src={Img7} alt="" />
            </div>
            <div className='tool-box'>
                    
                    <p className='text-grade'>Metasploit</p>

                    <img src={Img8} alt="" />
            </div>
            <div className='tool-box'>
                    
                    <p className='text-grade'>Nessus</p>

                    <img src={Img9} alt="" />
            </div>
            <div className='tool-box'>
                
                    <p className='text-grade'>Nikto</p>

                    <img src={Img10} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Tools