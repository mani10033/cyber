import React from 'react'
import Img3 from '/src/images/overview.png'


function Overview() {
  return (
    <section className='over-section'>
        <div className='over-container'>
            <div className='over-content'>
                   <h1>Cyber Security Training Overview</h1>
                   <p>Cyber Security (electronic information security or information technology security) <br />
                      is the practice of protecting PCs, phones, servers, electronic systems, and data from various <br />
                     spiteful attacks. Cyber Security is becoming increasingly prevalent in today's world,  <br />
                      many businesses being affected by cyber-attacks each year. Our Cyber Security training <br />
                       courses will teach you how to avoid and protect against Cyber Security threats.
                    </p>
                    <p>During our Cyber Security Training, delegates will become familiar with various essential <br />
                        topics like preventing cyber-attacks, browsing securely, artificial ignorance, Social <br />
                        Engineering Toolkit (SET), risk management, etc. This Cyber Security Training will  <br />
                         delegates to begin their career as Cyber Security professionals in multinational companies.
                   </p>
                   <button className='over-but'>infoNeed More Information</button>
            </div>
            <div className='over-img'>
               <h2>Types of Cyber Security</h2>
               <img src={Img3} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Overview