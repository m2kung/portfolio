import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img src="./favicon-32x32.png" alt="" /> */}
                <p>stay in touch</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="enter your email"/>
                </div>
                <div className="footer-subscribe">subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">✞<br></br>soli deo gloria</p>
            <div className="footer-bottom-right">
                <p>"My flesh and my heart may fail, <br></br>
                    but <span>God is the strength of my heart</span> and my portion forever." <br />~Ps. 76:23 ESV</p>
            </div>
        </div>
    </div>
  )
}

export default Footer