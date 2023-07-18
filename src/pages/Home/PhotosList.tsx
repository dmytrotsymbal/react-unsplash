import { useEffect, useState } from 'react'
import Photo from './Photo'
import { Grid } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { fetchImages } from 'redux/unsplashSlice'
import Pagination from 'Components/Pagination/Pagination'

const PhotoList = () => {
    const { images, status, error } = useAppSelector((state) => state.unsplash)
    const dispatch = useAppDispatch()

    const [pageNumber, setPageNumber] = useState<number>(1)

    useEffect(() => {
        dispatch(fetchImages(pageNumber))
    }, [dispatch, pageNumber])

    if (status === 'loading') {
        return <div className="custom-loader"></div>
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>
    }

    const nextPageFunction = () => {
        setPageNumber(pageNumber + 1)
    }

    const prevPageFunction = () => {
        setPageNumber(pageNumber - 1)
    }
    return (
        <>
            <Pagination
                nextPageFunction={nextPageFunction}
                prevPageFunction={prevPageFunction}
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
