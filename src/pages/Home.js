import ApartmentGrid from '../components/ApartmentGrid'
import Banner from '../components/Banner'
import image from '../images/crique.png'

function Home() {
    return (
        <>
            <Banner
                src={image}
                alt='crique avec reliefs'
                text='Chez vous,&nbsp;'
                text2='partout et ailleurs'
            />
            <ApartmentGrid />
        </>
    )
}

export default Home
