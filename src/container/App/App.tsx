import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline' //для типу відміни стилів, робить базовий ресет
import Footer from 'container/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from 'utils/scrollToTop'
import { useAppSelector } from 'redux/hooks'
import './App.css'
import React from 'react'

type Props = {}

const HomePage = React.lazy(() => import('../../pages/Home/Home'))
const ImageDetailsPage = React.lazy(
    () => import('../../pages/ImageDetails/ImageDetails')
)
const FavoritesPage = React.lazy(
    () => import('../../pages/Favorites/Favorites')
)
const MobilesPage = React.lazy(() => import('../../pages/Mobiles/Mobiles'))
const ErrorPage = React.lazy(() => import('../../pages/404/ErrorPage'))

function App(props: Props) {
    const sunnyTheme = useAppSelector((state) => state.theme.sunnyTheme)
    return (
        <>
            <CssBaseline />
            <Header />
            <main className={sunnyTheme ? 'App' : 'App-dark'}>
                <ScrollToTop />
                <React.Suspense>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/image/:id"
                            element={<ImageDetailsPage />}
                        />
                        <Route path="/favorites" element={<FavoritesPage />} />
                        <Route path="/mobiles" element={<MobilesPage />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </React.Suspense>
            </main>
            <Footer />
        </>
    )
}

export default App
