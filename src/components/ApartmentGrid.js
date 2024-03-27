import apartments from '../db.json'

/** SCSS */
import '../sass/layouts/apartmentGrid.scss'

/** Components */
import ApartmentCard from './ApartmentCard'

function ApartmentGrid() {
    return (
        <section className='grid'>
            {apartments.map((apartment) => (
                <ApartmentCard
                    key={apartment.id}
                    title={apartment.title}
                    url={apartment.cover}
                    id={apartment.id}
                />
            ))}
        </section>
    )
}

export default ApartmentGrid
