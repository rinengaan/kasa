import { useEffect, useState } from 'react'

/** SCSS */
import '../sass/layouts/apartmentGrid.scss'

/** Components */
import ApartmentCard from './ApartmentCard'

function ApartmentGrid() {
    /** Get DB from file */
    const [apartments, setApartments] = useState([])
    useEffect(getDB, [])

    function getDB() {
        fetch('db.json')
            .then((res) => res.json())
            .then((res) => setApartments(res))
    }

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
