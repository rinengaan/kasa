/** React Modules */
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

/** SCSS */
import '../sass/pages/apartment.scss'

/** Components */
import ApartmentDesc from '../components/ApartmentDesc'
import Carrousel from '../components/Carrousel'
import Dropdown from '../components/Dropdown'

function Apartment() {

    /** Get current apartment data */
    const location = useLocation()
    const [currentApartment, setCurrentApartment] = useState(null)
    useEffect(getApartmentDetails, [location.state])
    function getApartmentDetails() {
        fetch('db.json')
            .then((res) => res.json())
            .then((apartments) => {
                const flat = apartments.find(
                    (apartment) => apartment.id === location.state
                )
                setCurrentApartment(flat)
            })
    }

    /** Add loader for low speed networks */
    if (currentApartment == null) return <div>Chargement...</div>


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
                    type="array"
                    content={currentApartment.equipments}
                />
            </div>
        </section>
    )
}

export default Apartment
