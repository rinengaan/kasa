import { Link } from 'react-router-dom'

/** SCSS */
import '../sass/components/apartmentCard.scss'

function ApartmentCard({ title, url, id }) {
    return (
        <Link to='/apartment' state={id} className='apartmentCard'>
            <img src={url} alt='Aperçu du logement' />
            <div className='apartmentCard__title'>{title}</div>
        </Link>
    )
}

export default ApartmentCard
