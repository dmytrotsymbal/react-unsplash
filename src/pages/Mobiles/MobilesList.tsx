import { Button, Grid } from '@mui/material'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { loadMore } from 'redux/loadMoreSlice'
import { fetchPhoneWallpapers } from 'redux/unsplashMobileSlice'
import MobilesItem from './MobilesItem'
import CustomLoader from 'Components/CustomLoader/CustomLoader'

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
        return <CustomLoader />
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>
    }

    return (
        <>
            <Grid container spacing={2}>
                {mobileImages.map((image) => (
                    <Grid item xs={12} md={6} lg={3} key={image.id}>
                        <MobilesItem image={image} />
                    </Grid>
                ))}
            </Grid>

            <Button onClick={() => dispatch(loadMore())}>LOAD MORE</Button>
        </>
    )
}
export default MobilesList
