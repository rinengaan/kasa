/** React Modules */
import { NavLink } from 'react-router-dom'

/** SCSS */
import '../sass/components/navbar.scss'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar__logo'>
                <img src='logo.png' alt='Logo Kasa' />
            </div>
            <div className='navbar__links'>
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='/about'>A Propos</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
