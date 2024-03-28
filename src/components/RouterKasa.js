import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from './Navbar'
import Footer from './Footer'
import Apartment from '../pages/Apartment'
import About from '../pages/About'
import Error from '../pages/Error'
import '../sass/layouts/main.scss'

function RouterKasa() {
    return (
        <Router>
            <Navbar />
            <div className='wrapper'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/apartment/:id' element={<Apartment />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    )
}

export default RouterKasa
