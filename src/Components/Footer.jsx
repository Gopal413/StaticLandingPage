import React from 'react'
import "./Fooder.css"


function LandingFooter() {
  return (
    <div className='landfooter'>
        <div className='land-section'>
            <h2 style={{fontSize:"40px"}}>Join the Sharief Squad</h2>
            <p style={{fontSize:"20px"}}>Get first dibs on flash sales, exclusive drops, and that one gadget you didn't know you needed.</p>
            <div className='land-form'>
                <input type="text" placeholder='Your campus Email here...' />
                <button><i class="fa-brands fa-telegram"></i>Sign Me Up</button>
            </div>
        </div>
        <div className='mainfooter' >
            <div className='full-footer'>
            <div className='footer1'>
                <h3>Gopal</h3>
                <div className='footer-sec'>
                <p>Making student life a little less chaotic, one deal at a time.</p>
                <p id='icons'><i class="fa-brands fa-instagram"></i><i class="fa-solid fa-music"></i><i class="fa-brands fa-discord"></i></p>
                </div>
            </div>
             <div className='footer1'>
                <h3>Quick Links</h3>
                <div className='footer-sec'>
                <p>Shipping Info</p>
                <p>Returns</p>
                <p>Student Perks</p>
                </div>
            </div>
             <div className='footer1'>
                <h3>Support</h3>
                <div className='footer-sec'>
                <p>Help Center</p>
                <p>Contact Us</p>
                <p>Privacy Policy</p>
                </div>

            </div>
            <hr />
            </div>
            
            <div className='footer2'>
                <p>© 2025 Sharief Co. All rights reserved. | Built with ❤️ for students.</p>
            </div>
        </div>
      
    </div>
  )
}

export default LandingFooter
