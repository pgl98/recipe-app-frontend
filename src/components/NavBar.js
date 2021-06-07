import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const padding = {
        paddingRight: 5
    }
    return (
        <nav>
            <Link style={padding} to='/'>home</Link>
            <Link style={padding} to='/search'>search</Link>
        </nav>
    )
}

export default NavBar