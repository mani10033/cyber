import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'


function Faq() {
  return (
    <section className='faq-section'>
        <span>FAQs</span>
        <h1>Frequently Asked Questions</h1>
        <div className='faq-container'>
            <div className='faq-content'>
                   <FontAwesomeIcon className='faq-icon' icon={faChevronCircleDown} />
                   <p>What is Cyber Security?</p>
            </div>
            <div className='faq-content'>
                   <FontAwesomeIcon className='faq-icon' icon={faChevronCircleDown} />
                   <p>Why should you need Cyber Security in your business?</p>
            </div>
            <div className='faq-content'>
                   <FontAwesomeIcon className='faq-icon' icon={faChevronCircleDown} />
                   <p>I am unable to find the course that I am looking for.</p>
            </div>
            <div className='faq-content'>
                   <FontAwesomeIcon className='faq-icon' icon={faChevronCircleDown} />
                   <p>What will I learn in the Cyber Security training?</p>
            </div>
            <div className='faq-content'>
                   <FontAwesomeIcon className='faq-icon' icon={faChevronCircleDown} />
                   <p>What are the various tools and techniques for Cyber Security?</p>
            </div>
            <div className='faq-content'>
                   <FontAwesomeIcon className='faq-icon' icon={faChevronCircleDown} />
                   <p>Can The Knowledge Academy deliver corporate/in-house training?</p>
            </div>

        </div>
    </section>
  )
}

export default Faq