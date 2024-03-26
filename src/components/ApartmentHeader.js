import '../sass/components/apartmentHeader.scss'
import Tag from './Tag'
import ApartmentTitle from './ApartmentTitle'

function ApartmentHeader({ title, location, tagArray }) {
    return (
        <div className='apartment-desc__header'>
            <ApartmentTitle title={title} location={location} />
            <div className='apartment-desc__tags'>
                {tagArray.map((tag) => (
                    <Tag tag={tag} key={tag} />
                ))}
            </div>
        </div>
    )
}

export default ApartmentHeader
