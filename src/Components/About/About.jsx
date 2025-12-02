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
                    <p>hi there! i'm melanie, a second year nanotechnology engineering student at the university of waterloo with a particular interest in materials sciences and quantum mechancics.</p>
                    <p>currently i work at IPEX R&D, where i specialize in testing and development of recycled plastic piping formulations</p>
                    <p>in my free time, i'm a hobby musician, typer, and reader.</p>
                    <p>passionate about good views, good food, and good organization.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>cajawn</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>gee-tar</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>piano</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>clash royale</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
                <div className="about-achievement">
                    <div className="about-achievement-inner">
                        <div className="about-achievement-front">
                            <p>GALATIANS</p>
                            <h1>2:20</h1>
                        </div>
                        <div className="about-achievement-back">
                            I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.
                        </div>
                    </div>
                </div>
                <hr />
                <div className="about-achievement">
                    <div className="about-achievement-inner">
                        <div className="about-achievement-front">
                            <p>PSALM</p>
                            <h1>16:5</h1>
                        </div>
                        <div className="about-achievement-back">
                            The Lord is my chosen portion and my cup; <br></br> you hold my lot.
                        </div>
                    </div>
                </div>
                <hr />
                <div className="about-achievement">
                    <div className="about-achievement-inner">
                        <div className="about-achievement-front">
                            <p>JUDE</p>
                            <h1>24-25</h1>
                        </div>
                        <div className="about-achievement-back">
                            Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy, to the only God, our Savior, through Jesus Christ our Lord, be glory, majesty, dominion, and authority, before all time and now and forever. Amen.
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About