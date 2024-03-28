import React, { useState } from 'react'
import '../sass/components/carrousel.scss'
import arrowLeft from '../images/arrow_left.png'
import arrowRight from '../images/arrow_right.png'
function Carrousel({ urlArray }) {
    /** Current picture shown */
    const [currentPicture, setCurrentPicture] = useState(0)
    console.log(currentPicture)
    /** Arrow slide functions */
    const moveLeft = () => {
        let index = currentPicture
        index--
        if (index < 0) {
            index = urlArray.length - 1
        }
        setCurrentPicture(index)
    }

    const moveRight = () => {
        let index = currentPicture
        index++
        if (index > urlArray.length - 1) {
            index = 0
        }
        setCurrentPicture(index)
    }
    if (urlArray.length > 1) {
        return (
            <div className='carrousel'>
                <img
                    className='cover'
                    src={urlArray[currentPicture]}
                    alt='Apartment Cover'
                />

                <p className='counter'>
                    {currentPicture + 1}/{urlArray.length}
                </p>
                <img
                    className='arrow arrow_left'
                    src={arrowLeft}
                    alt='Arrow Left'
                    onClick={moveLeft}
                />
                <img
                    className='arrow arrow_right'
                    src={arrowRight}
                    alt='Arrow Right'
                    onClick={moveRight}
                />
            </div>
        )
    } else {
        return (
            <div className='carrousel'>
                <img
                    className='cover'
                    src={urlArray[currentPicture]}
                    alt='Apartment Cover'
                />
            </div>
        )
    }
    
}

export default Carrousel
