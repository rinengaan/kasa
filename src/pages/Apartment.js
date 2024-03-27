/** React Modules */
import { useParams, Navigate } from 'react-router-dom'
import apartments from '../db.json'
/** SCSS */
import '../sass/pages/apartment.scss'

/** Components */
import ApartmentDesc from '../components/ApartmentDesc'
import Carrousel from '../components/Carrousel'
import Dropdown from '../components/Dropdown'

function Apartment() {
    const { id } = useParams()
    /** Get current apartment data */
    const currentApartment = apartments.find((apartment) => apartment.id === id)

    /** redirect on incorrect url */
    if (currentApartment == null) return <Navigate to='/404' replace/>

    return (
        <section className='apartment-page-layout'>
            <Carrousel urlArray={currentApartment.pictures} />
            <ApartmentDesc
                title={currentApartment.title}
                location={currentApartment.location}
                tagArray={currentApartment.tags}
                name={currentApartment.host.name}
                picture={currentApartment.host.picture}
                rating={currentApartment.rating}
            />
            <div className='dropdowns'>
                <Dropdown
                    category='Description'
                    content={currentApartment.description}
                />
                <Dropdown
                    category='Équipements'
                    type='array'
                    content={currentApartment.equipments}
                />
            </div>
        </section>
    )
}

export default Apartment
