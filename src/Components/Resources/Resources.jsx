import React, {useState} from 'react'
import './Resources.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { Link } from 'react-router-dom'

const Projectstest = () => {

  return (
    <div className='mywork' id='resources'>
      <div className="mywork-title">
            <h1>resources & rec's</h1>
            <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
          {mywork_data.map((work,index)=>{
            return (
              <Link className="anchor" to="/resources" key={index}>
                <img src={work.w_img} alt="" />
              </Link>
            );
          })}
      </div>
      <div className="mywork-showmore">
            <p>show more</p>
            <img src={arrow_icon} alt="" />
      </div>
    </div> 
  )
}

export default Projectstest