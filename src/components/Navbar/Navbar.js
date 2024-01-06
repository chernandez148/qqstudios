import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

function Navbar() {
    return (
        <div className='Navbar'>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">Our Story</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/work">Our Work</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar