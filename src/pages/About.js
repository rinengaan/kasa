import React from 'react'
import Banner from '../components/Banner'
import Dropdown from '../components/Dropdown'
import aboutDb from '../about.json'
import image from '../images/montagne.png'
/** SCSS */
import '../sass/pages/about.scss'


function About() {
    return (
        <div className='about-page-layout'>
            <Banner src={image} alt={'montagnes'} text='' text2=''/>
            <div className='about-dropdowns'>
                {aboutDb.map((about) => (
                    <Dropdown
                        key={about.category}
                        category={about.category}
                        content={about.content}
                    />
                ))}
            </div>
        </div>
    )
}

export default About
