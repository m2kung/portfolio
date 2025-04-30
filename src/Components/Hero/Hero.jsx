import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile_img} alt="" />
      <h1><span>hi.</span> i'm melanie</h1>
      <h2>aka notamelon.e</h2>
      <p>full-time child of God <br></br>
      part-time musician, writer, traveller, coder, 3D designer</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero