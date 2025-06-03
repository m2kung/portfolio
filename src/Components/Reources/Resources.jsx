import React, {useState} from 'react'
import './Resources.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projectstest = () => {

  return (
    <div className='mywork' id='work'>
        <div className="mywork-title">
            <h1>resources & rec's</h1>
            <img src={theme_pattern} alt="" />
        </div>
    <div className="mywork-container">
        <div className="work-inner">
          <div className="work-front">
            {mywork_data.map((work,index)=>{
              return <img key={index} src={work.w_img} alt="" />
            })}
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        <div className="mywork-showmore">
        </div>
        </div>
        <div className="work-back">
            I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.
        </div>
        </div>
      </div>
    </div>
  )
}

export default Projectstest