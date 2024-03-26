import React from 'react'
import '../sass/components/rating.scss'

function Rating({ rating }) {
    return (
        <div className='host-rating'>
            {[1, 2, 3, 4, 5].map((num) => (
                <i
                    key={num} className={
                        rating > num
                            ? 'fa-solid fa-star js-on'
                            : 'fa-solid fa-star'
                    }
                ></i>
            ))}
        </div>
    )
}

export default Rating
