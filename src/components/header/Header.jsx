import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './Header.css'

const navLinks = [


    {
      to: "company",
      display: "company",
    },
    
    {
      to: "home",
      display: "Home",
    },
    {
      to: "about",
      display: "About",
    },
    
    {
      to: "contact",
      display: "Contact",
    },
]

function Header() {

    const[Toggle, ShowMenu] = useState(false)

  return (
    <header className='header'>
      <nav className='nav container '>
        <Link to='home' className='nav__logo'>Furniture World</Link>

        <div className={Toggle ? "nav__menu show_menu" : "nav__menu"}>
            <ul className='nav__list '>
                {navLinks.map((items, index) => (
                    <li
                    key={index}
                     className='nav_item'>
                    <Link 
                    activeClass='active' 
                    to={items.to} 
                    spy={true} 
                    smooth={true} 
                    offset={-60} 
                    duration={100}  
                    className='nav__link'
                    >
                    {items.display}
                    </Link>
                    </li>
                ))}
            </ul>

            <i className='uil uil-times nav__close' 
            onClick={()=>{
            Toggle ? ShowMenu(false) : ShowMenu(true)
        }}></i>
        </div> 

        <Link to='home' className='nav_button '>Get started</Link>   

        <div className="nav__toggle" 
            onClick={()=>{
            Toggle ? ShowMenu(false) : ShowMenu(true)
        }}>
            <i className='uil uil-apps'></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
