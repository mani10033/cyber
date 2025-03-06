import React from 'react'

function Appl() {
  return (
    <section className='apply-section'>
        <h1>Get A Quote</h1>
         <div className='apply-container'>
         <p className='apply-p'>* WHO WILL BE FUNDING THE COURSE?</p>
            <div className='apply-content1'>
               
             <div className='apply-input1'><button   />My Employee</div>    
             <div className='apply-input2'><button   />I will</div>    
             <div className='apply-input2'><button   />Not Sure</div>    
             {/* <div className='apply-input2'><input type="text" placeholder='I Will'  /></div>    
             <div className='apply-input2'><input type="text" placeholder='Not Sure'  /></div>     */}
            </div>
            <div className='apply-content2'>
                <div className='apply-content3'>
                <p className='apply-p'>*Full Name</p>
                <div className='apply-input3'><input type="text" placeholder=''  /></div>    
                </div>
                <div className='apply-content3'>
                <p className='apply-p'>*Mobile</p>
                <div className='apply-input3'><input type="text" placeholder='+91'  /></div>    
                </div>
                <div className='apply-content3'>
                <p className='apply-p'>*Company Email</p>
                <div className='apply-input3'><input type="text" placeholder='me@company'  /></div>    
                </div>
                <div className='apply-content3'>
                <p className='apply-p'>*Job Title</p>
                <div className='apply-input3'><input type="text" placeholder='Product Manager'  /></div>    
                </div>
                <div className='apply-content4'>
                <p className='apply-p'>*Message Optional</p>
                <div className='apply-input4'><input type="text" placeholder=''  /></div>    
                </div>

               
            </div>
            <div className='apply-content5'>
                  <p><input type="checkbox" />I wish to sign up to our email marketing, offers and discounts</p>
                  <p>By submitting your details you agree to be contacted in order to respond to your enquiry</p>
                  <button className='apply-btn'>submit</button>
            </div>
            </div>          
    </section>
  )
}

export default Appl