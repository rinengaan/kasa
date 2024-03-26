import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Main from './Main'
import Navbar from './Navbar'
import Footer from './Footer'
import Apartment from '../pages/Apartment'

function RouterKasa() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path='/'
                    element={
                        <Main>
                            <Home />
                        </Main>
                    }
                />
                <Route
                    path='/apartment'
                    element={
                        <Main>
                            <Apartment />
                        </Main>
                    }
                />
                <Route path='*' element={<div>erreur</div>} />
            </Routes>

            <Footer />
        </Router>
    )
}

export default RouterKasa
