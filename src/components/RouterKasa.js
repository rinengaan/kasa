import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from './Navbar'
import Footer from './Footer'
import Apartment from '../pages/Apartment'

function RouterKasa() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/apartment/:id' element={<Apartment />} />
                <Route path='*' element={<div>erreur</div>} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default RouterKasa
