import { useEffect } from 'react'
import Photo from './Photo'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { fetchImages } from 'redux/unsplashSlice'
import Masonry from 'react-masonry-css'
import './PhotosList.css'
import { loadMore } from 'redux/loadMoreSlice'

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
        return <div className="custom-loader"></div>
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

            <button onClick={() => dispatch(loadMore())}>loadMOre</button>
        </>
    )
}

export default PhotoList
