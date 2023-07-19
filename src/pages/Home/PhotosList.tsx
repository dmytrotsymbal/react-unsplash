import { useEffect } from 'react'
import Photo from './Photo'
// import { Grid } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { fetchImages } from 'redux/unsplashSlice'
import Pagination from 'Components/Pagination/Pagination'
import { nextPage, prevPage } from 'redux/paginationSlice'
import Masonry from 'react-masonry-css'
import './PhotosList.css'

const PhotoList = () => {
    const { images, status, error } = useAppSelector((state) => state.unsplash)
    const dispatch = useAppDispatch()

    const pageNumber = useAppSelector((state) => state.pagination.pageNumber)

    useEffect(() => {
        dispatch(fetchImages(pageNumber))
    }, [dispatch, pageNumber])

    if (status === 'loading') {
        return <div className="custom-loader"></div>
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>
    }

    const breakpointColumnsObj = {
        default: 5, // Количество столбцов по умолчанию
        1100: 5, // Количество столбцов при ширине экрана до 1100px
        700: 2, // Количество столбцов при ширине экрана до 700px
    }

    return (
        <>
            <Pagination
                nextPage={() => dispatch(nextPage())}
                prevPage={() => dispatch(prevPage())}
            />
            <div>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="masonry-grid"
                    columnClassName="masonry-grid-column"
                >
                    {images.map((image) => (
                        <div key={image.id} className="masonry-grid-item">
                            <Photo image={image} />
                        </div>
                    ))}
                </Masonry>
            </div>
        </>
    )
}

export default PhotoList
