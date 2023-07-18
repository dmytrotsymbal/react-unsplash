import { useEffect } from 'react'
import Photo from './Photo'
import { Grid } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { fetchImages } from 'redux/unsplashSlice'
import Pagination from 'Components/Pagination/Pagination'
import { nextPage, prevPage } from 'redux/paginationSlice'

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

    return (
        <>
            <Pagination
                nextPage={() => dispatch(nextPage())}
                prevPage={() => dispatch(prevPage())}
            />
            <div>
                <Grid container spacing={2}>
                    {images.map((image) => (
                        <Grid
                            item
                            sx={{ display: 'flex', justifyContent: 'center' }}
                            xs={4}
                            key={image.id}
                        >
                            <Photo image={image} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )
}

export default PhotoList
