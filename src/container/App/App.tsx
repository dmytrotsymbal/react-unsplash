import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline' //для типу відміни стилів, робить базовий ресет
import Footer from 'container/Footer/Footer'
import Home from 'pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import ImageDetails from 'pages/ImageDetails/ImageDetails'

type Props = {}

function App(props: Props) {
    return (
        <>
            <CssBaseline />
            <Header />
            <br />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/image/:id" element={<ImageDetails />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
