import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline' //для типу відміни стилів, робить базовий ресет
import Footer from 'container/Footer/Footer'
import Home from 'pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import ImageDetails from 'pages/ImageDetails/ImageDetails'
import Favorites from 'pages/Favorites/Favorites'
import ScrollToTop from 'utils/scrollToTop'
import Mobiles from 'pages/Mobiles/Mobiles'
import { useAppSelector } from 'redux/hooks'
import './App.css'

type Props = {}

function App(props: Props) {
    const sunnyTheme = useAppSelector((state) => state.theme.sunnyTheme)
    return (
        <>
            <CssBaseline />
            <Header />
            <div className={sunnyTheme ? 'App' : 'App-dark'}>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/image/:id" element={<ImageDetails />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/mobiles" element={<Mobiles />} />
                </Routes>
            </div>

            <Footer />
        </>
    )
}

export default App
