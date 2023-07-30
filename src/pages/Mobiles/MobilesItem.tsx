import { Link } from 'react-router-dom'
import { Image } from 'redux/unsplashSlice'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import ShareIcon from '@mui/icons-material/Share'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likesSlice'
import { addLikeCount, removeLikeCount } from 'redux/likesCountSlice'
import { useState } from 'react'
import { addToFavorites, removeFromFavorites } from 'redux/favoritesSlice'
import PopUp from 'Components/PopUp/PopUp'
import './MobilesItem.scss'

type PhotoProps = {
    image: Image
}

const MobilesItem = ({ image }: PhotoProps) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[image.id])
    const dispatch = useAppDispatch()

    const likesCount = useAppSelector(
        (state) => state.likesCountState.likesCount
    )

    //----------------------------------------------------------------

    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    //----------------------------------------------------------------

    return (
        <>
            <div className="MobilesItem">
                <Link
                    style={{ textDecoration: 'none', color: 'black' }}
                    to={`/image/${image.id}`}
                >
                    <img
                        className="CardImg"
                        src={image.urls.small}
                        alt="PhotoElementImg"
                    />
                </Link>
                <button
                    className={isLiked ? 'likesButtonClicked' : 'likesButton'}
                    onClick={() => {
                        isLiked
                            ? dispatch(removeLike(image.id))
                            : dispatch(addLike(image.id))

                        isLiked
                            ? dispatch(removeLikeCount(image.id))
                            : dispatch(addLikeCount(image.id))

                        isLiked
                            ? dispatch(removeFromFavorites(image.id))
                            : dispatch(addToFavorites(image))
                    }}
                >
                    {isLiked ? (
                        <ThumbUpAltIcon style={{ width: '17px' }} />
                    ) : (
                        <ThumbUpOffAltIcon style={{ width: '17px' }} />
                    )}

                    <span>{image.likes + likesCount}</span>
                </button>

                <button className="infoButton" onClick={handleOpen}>
                    Info
                </button>

                <PopUp open={open} handleClose={handleClose} image={image} />

                <button className="shareButton">
                    <ShareIcon style={{ width: '17px' }} />
                </button>
            </div>
        </>
    )
}

export default MobilesItem
