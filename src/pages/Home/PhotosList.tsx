import { useEffect } from 'react'
import Photo from './Photo'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { fetchImages } from 'redux/unsplashSlice'
import Masonry from 'react-masonry-css'
import './PhotosList.css'
import { loadMore } from 'redux/loadMoreSlice'
import { Button } from '@mui/material'
import CustomLoader from 'Components/CustomLoader/CustomLoader'

const PhotoList = () => {
    const { images, status, error } = useAppSelector((state) => state.unsplash)
    const dispatch = useAppDispatch()

    // const pageNumber = useAppSelector((state) => state.pagination.pageNumber)

    const imagesPerPageNumber = useAppSelector(
        (state) => state.loadMore.imagesPerPageNumber
    )

    useEffect(() => {
        dispatch(fetchImages(imagesPerPageNumber))
    }, [dispatch, imagesPerPageNumber])

    if (status === 'loading') {
        return <CustomLoader />
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>
    }

    const breakpointColumnsObj = {
        default: 6,
        1100: 3,
        700: 2,
    }
    return (
        <>
            <br />
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

            <Button onClick={() => dispatch(loadMore())}>LOAD MORE</Button>
        </>
    )
}

export default PhotoList
