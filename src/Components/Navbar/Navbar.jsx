import React, {useState, useRef} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { Link } from 'react-router'

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }
AnchorLink
  return (
    <div className='navbar'>
        <img className='logo' src="./favicon-32x32.png" alt="" />
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>home</p></AnchorLink>{menu === "home" ? <img src={underline} alt="" /> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>about</p></AnchorLink>{menu === "about" ? <img src={underline} alt="" /> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>my work</p></AnchorLink>{menu === "services" ? <img src={underline} alt="" /> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>my stuff</p></AnchorLink>{menu === "work" ? <img src={underline} alt="" /> : <></>}</li>
            {/* <Link to="/resources">Resources</Link> */}
            {/* <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt="" /> : <></>}</li> */}
            <li><a className='anchor-link' href="https://medium.com/@melanikung" target="_blank" rel="noopener noreferrer">blog</a></li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => setMenu("contact")}><p>connect</p></AnchorLink>{menu=="contact" ? <img src={underline} alt=""/> : <></>}</div>
    </div>
  )
}

export default Navbar