import { Button } from '@mui/material'
import Photo from 'pages/Home/Photo'
import { useEffect } from 'react'
import Masonry from 'react-masonry-css'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { loadMore } from 'redux/loadMoreSlice'
import { fetchPhoneWallpapers } from 'redux/unsplashMobileSlice'

type Props = {}
const MobilesList = (props: Props) => {
    const { mobileImages, status, error } = useAppSelector(
        (state) => state.unsplashMobile
    )
    const dispatch = useAppDispatch()

    const imagesPerPageNumber = useAppSelector(
        (state) => state.loadMore.imagesPerPageNumber
    )

    useEffect(() => {
        dispatch(fetchPhoneWallpapers(imagesPerPageNumber))
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
            <div>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="masonry-grid"
                    columnClassName="masonry-grid-column"
                >
                    {mobileImages.map((image) => (
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
export default MobilesList
