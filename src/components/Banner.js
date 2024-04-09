import '../sass/components/banner.scss'

const Banner = ({src, alt, text, text2}) => {
    return (
        <div className='banner-text'>
            <img src={src} alt={alt} />
            <h1 className='banner-text__title'>
                <span>{text}</span>
                <span>{text2}</span>
            </h1>
        </div>
    )
}

export default Banner
