import React, { useState } from 'react'
import KeretakuIcon from '../Assets/Icons/keretaku_subtext.png'
import { NavLink } from 'react-router-dom'
import { Garage, Home, Map } from '@mui/icons-material'
import { Sling as Hamburger } from 'hamburger-react'

export default function MenuBar() {
  const [showNav, setShowNav] = useState(false)

  const toggleNavItems = () => {
    setShowNav(!showNav)
  }
  return (
      <div className="menubar" style={{ position: 'relative' }}>
        <div className="container">
        {/* <div className="d-flex align-items-center">
          <img src={KeretakuIcon} height={50} width={50}/>
          <h1 style={{ color: '#F3F3F3', fontSize: 20, marginTop: 5 }}>KeretaKu</h1>
        </div> */}
        <div className="menu-icon">
          {/* <Menu /> */}
          <Hamburger size={24} direction="right" duration={0.3} rounded toggled={showNav} toggle={setShowNav} />
        </div>
        <NavLink to="/">
          <img src={KeretakuIcon} alt="caretaku-icon" height={56} width={100} />
        </NavLink>
        <div className={`nav-elements ${showNav && 'active'}`}>
          <ul>
            {[
              {
                text: 'Home',
                link: '/',
                class: "home",
                icon: <Home style={{ width: 20 }}/>
              },
              {
                text: 'Car Models',
                link: '/car-models',
                class: 'car',
                icon: <Garage style={{ width: 20 }} />
              },
              {
                text: 'Find Dealerships',
                link: '/dealerships',
                class: 'dealerships',
                icon: <Map  style={{ width: 20 }} />
              }
            ].map((d, index) => (
                <NavLink key={index} to={d.link} className="hover-active">
                  <li
                    // onMouseOver={() => setOnHover(true)}
                    // onMouseLeave={() => setOnHover(false)}
                    onClick={toggleNavItems}
                    style={{ marginInline: 20 }}
                    >
                    {d.icon}
                    &nbsp;
                    <span>{d.text}</span>
                  </li>
                </NavLink>
              ))}
          </ul>
        </div>
        {/* <div className="d-flex align-items-center">
          <NavLink to="profile-page">
            <Avatar style={{ width: 30, height: 30, cursor: 'pointer' }}/>
          </NavLink>
          &nbsp;&nbsp;
          <IconButton>
            <Logout style={{ color: 'salmon', width: 20 }} />
          </IconButton>
        </div> */}
      </div>

      </div>
      
  )
}
