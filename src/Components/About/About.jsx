import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-title">
            <h1>about me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-paragraph">
                    <p>hi there! i'm melanie, a second year nanotechnology engineering at the university of waterloo with a particular interest in materials sciences and quantum mechancics.<br />
                    hobby musician, typer, and reader.<br />
                    passionate about good views, good food, and good organization.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
                <div className="about-achievement">
                    <p>GALATIANS</p>
                    <h1>2:20</h1>
                </div>
                <hr />
                <div className="about-achievement">
                    <p>PSALM</p>
                    <h1>16:5</h1>
                </div>
                <hr />
                <div className="about-achievement">
                    <p>JUDE</p>
                    <h1>24-25</h1>
                </div>
        </div>
    </div>
  )
}

export default About