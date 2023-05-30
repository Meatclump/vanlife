import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <nav>
            <div className='page-title'>
                <h2><Link to='/'>#VanLife</Link></h2>
            </div>
            <div className='nav-items'>
                <Link to='/about'>About</Link>
                <Link to='/vans'>Vans</Link>
            </div>
        </nav>
    )
}