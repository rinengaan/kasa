/** React Modules */
import { NavLink } from 'react-router-dom'

/** SCSS */
import '../sass/pages/error.scss'

function Error() {
    return (
        <div className='error-page-layout'>
            <h1 className='error-number'>404</h1>
            <p className='error-desc'>
                Oups! La page que vous demandez n'existe pas.
            </p>
            <NavLink className='error-link' to='/'>
                Retourner sur la page d’accueil
            </NavLink>
        </div>
    )
}

export default Error
