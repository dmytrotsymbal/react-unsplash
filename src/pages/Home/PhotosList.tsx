import { useEffect } from 'react'
import Photo from './Photo'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { fetchImages } from 'redux/unsplashSlice'
import Masonry from 'react-masonry-css'
import { loadMore } from 'redux/loadMoreSlice'
import CustomLoader from 'Components/CustomLoader/CustomLoader'

type Props = {}

const PhotoList = (props: Props) => {
    const { images, status, error } = useAppSelector((state) => state.unsplash)
    const dispatch = useAppDispatch()

    const imagesPerPageNumber = useAppSelector(
        (state) => state.loadMore.imagesPerPageNumber
    )

    useEffect(() => {
        dispatch(fetchImages(imagesPerPageNumber))
    }, [dispatch, imagesPerPageNumber])

    if (status === 'loading') {
        setTimeout(() => {
            return <CustomLoader />
        }, 2000)
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

            <button
                className="loadMoreButton"
                onClick={() => dispatch(loadMore())}
            >
                LOAD MORE
            </button>
        </>
    )
}

export default PhotoList
