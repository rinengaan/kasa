import React, { useState } from 'react'
import '../sass/components/carrousel.scss'

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

    return (
        <div className='carrousel'>
            <img
                className='cover'
                src={urlArray[currentPicture]}
                alt='Apartment Cover'
            />
            <p className='counter'>
                {currentPicture+1}/{urlArray.length}
            </p>
            <img
                className='arrow arrow_left'
                src='arrow_left.png'
                alt='Arrow Left'
                onClick={moveLeft}
            />
            <img
                className='arrow arrow_right'
                src='arrow_right.png'
                alt='Arrow Right'
                onClick={moveRight}
            />
        </div>
    )
}

export default Carrousel
