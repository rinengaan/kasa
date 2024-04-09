import React, { useState } from 'react'
import '../sass/components/dropdown.scss'

function Dropdown({ category, content }) {
    const [isContentShown, setIsContentShown] = useState(false)

    const showContent = () => {
        setIsContentShown(!isContentShown)
    }

    return (
        <div className='dropdown__desc'>
            <div className='title-arrow'>
                <h3 className='category'>{category}</h3>
                <i
                    className={
                        isContentShown
                            ? 'fa-solid fa-chevron-down'
                            : 'fa-solid fa-chevron-up'
                    }
                    onClick={showContent}
                ></i>
            </div>
            {isContentShown && <p className='list-content'>{content}</p>}
        </div>
    )
}

export default Dropdown
