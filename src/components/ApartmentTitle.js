import '../sass/components/apartmentTitle.scss'
function ApartmentTitle({ title, location }) {
    return (
        <div className='apartment-desc__title'>
            <h1>{title}</h1>
            <h2>{location}</h2>
        </div>
    )
}

export default ApartmentTitle
