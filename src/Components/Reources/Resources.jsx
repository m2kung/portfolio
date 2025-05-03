import React, {useState} from 'react'
import './Resources.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projectstest = () => {

    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='mywork' id='work'>
        <div className="mywork-title">
            <h1>resources & rec's</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                    {isHovered ? 
                    <div className="work-container">{mywork_data.map((work,index) =>
                      {const nextItem = mywork_data[index + 1];
                        const firstItem = mywork_data[0]
                        return nextItem ? (
                        <img src={nextItem.w_img} alt="" />
                      ) : <img src={firstItem.w_img} alt="" />;
                    })} </div>: 
                    <div className="work-container">{mywork_data.map((work,index)=>{return <img src={work.w_img} alt="" />})}</div>}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default Projectstest