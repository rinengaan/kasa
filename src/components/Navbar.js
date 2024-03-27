/** React Modules */
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
/** SCSS */
import '../sass/components/navbar.scss'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar__logo'>
                <img src={logo} alt='Logo Kasa' />
            </div>
            <div className='navbar__links'>
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='/about'>A Propos</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
