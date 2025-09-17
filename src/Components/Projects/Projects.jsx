import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/experience_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { Link } from 'react-router-dom'

const Resources = () => {
  return (
    <div className='services' id='services'>
        <div className="services-title">
            <h1>experience & projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.slice(0, 3).map((service, index) => (
                <div key={index} className="services-format">
                    <Link className="anchor" to={service.s_link}>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <p>see more</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
        <div className="services-bottom-row">
            {Services_Data.slice(3, 5).map((service, index) => (
                <div key={index + 3} className="services-format">
                    <Link className="anchor" to={service.s_link}>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Resources