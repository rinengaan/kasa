import '../sass/components/apartmentDesc.scss'
import Host from './Host'
import ApartmentHeader from './ApartmentHeader'

function ApartmentDesc({ title, location, tagArray, name, picture, rating }) {
    return (
        <div className='apartment-desc'>
            <ApartmentHeader
                title={title}
                location={location}
                tagArray={tagArray}
            />
            <Host name={name} picture={picture} rating={rating} />
        </div>
    )
}

export default ApartmentDesc
