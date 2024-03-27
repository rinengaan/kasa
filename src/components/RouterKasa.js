import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from './Navbar'
import Footer from './Footer'
import Apartment from '../pages/Apartment'
import About from '../pages/About'
import Error from '../pages/Error'

function RouterKasa() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/apartment/:id' element={<Apartment />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default RouterKasa
