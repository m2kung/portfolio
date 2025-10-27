import React, {useState, useRef, useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { Link, useLocation } from 'react-router'

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const [collapsed, setCollapsed] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isGuitarPage = location.pathname === '/guitar';
  const isResourcesPage = location.pathname === '/resources';

  React.useEffect(() => {
    if (isGuitarPage) {
      setMenu("resources");
    }
  }, [isGuitarPage]);

    React.useEffect(() => {
    if (isResourcesPage) {
      setMenu("resources");
    }
  }, [isResourcesPage]);

    // collapse navbar when scrolling down, reveal when scrolling up
    useEffect(() => {
      let lastY = typeof window !== 'undefined' ? window.pageYOffset : 0;
      const onScroll = () => {
        const currentY = window.pageYOffset || 0;

        // if mobile menu is open, don't collapse (menu is visible)
        if (menuRef.current) {
          const right = menuRef.current.style.right;
          if (right === '0' || right === '0px') {
            setCollapsed(false);
            lastY = currentY;
            return;
          }
        }

        if (currentY > lastY && currentY > 80) {
          // scrolling down
          setCollapsed(true);
        } else {
          // scrolling up or near top
          setCollapsed(false);
        }

        lastY = currentY <= 0 ? 0 : currentY;
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, []);


  return (
    <div className={`navbar ${collapsed ? 'collapsed' : ''}`}>
        <img className='logo' src="./favicon-32x32.png" alt="" />
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li className={menu === "home" ? "active" : ""}>
              {isHomePage ? (
                <AnchorLink className='anchor-link' href="#home" offset={50}>
                  <p onClick={() => { setMenu("home"); window.scrollTo({top: 0, behavior: 'smooth'}); }}>home</p>
                </AnchorLink>
              ) : (
                <Link className='anchor-link' to="/">
                  <p onClick={() => { setMenu("home"); window.scrollTo({top: 0, behavior: 'smooth'}); }}>home</p>
                </Link>
              )}
              {/* underline image removed: CSS handles active underline now */}
            </li>

            <li className={(menu === "about" && !isGuitarPage) ? "active" : ""}>
              <AnchorLink className='anchor-link' offset={50} href='#about'>
                <p onClick={() => setMenu("about")}>about</p>
              </AnchorLink>
              {/* underline image removed: CSS handles active underline now */}
            </li>

            <li className={(menu === "services" || isGuitarPage) ? "active" : ""}>
              <AnchorLink className='anchor-link' offset={50} href='#services'>
                <p onClick={() => setMenu("services")}>my work</p>
              </AnchorLink>
              {/* underline image removed: CSS handles active underline now */}
            </li>

            <li className={(menu === "resources" && !isGuitarPage) ? "active" : ""}>
              <AnchorLink className='anchor-link' offset={50} href='#resources'>
                <p onClick={() => setMenu("resources")}>my stuff</p>
              </AnchorLink>
              {/* underline image removed: CSS handles active underline now */}
            </li>
            <li><a className='anchor-link' href="https://medium.com/@melanikung" target="_blank" rel="noopener noreferrer">blog</a></li>
        </ul>
  <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => setMenu("contact")}><p className={menu === "contact" ? 'active' : ''}>connect</p></AnchorLink></div>
    </div>
  )
}

export default Navbar