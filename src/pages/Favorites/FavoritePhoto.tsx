import { Link } from 'react-router-dom'
import { Image } from 'types/ImageTypes'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import ShareIcon from '@mui/icons-material/Share'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likesSlice'
import { addLikeCount, removeLikeCount } from 'redux/likesCountSlice'
import { useState } from 'react'
import { addToFavorites, removeFromFavorites } from 'redux/favoritesSlice'
import PopUp from 'Components/PopUp/PopUp'
import './FavoritePhoto.scss'

type PhotoProps = {
    image: Image
}

const FavoritePhoto = ({ image }: PhotoProps) => {
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

    const [copied, setCopied] = useState<boolean>(false)

    const handleCopied = () => {
        setCopied(true)
        navigator.clipboard.writeText(image.urls.regular)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    return (
        <>
            <div className="favoritePhotoElement">
                <Link
                    style={{ textDecoration: 'none', color: 'black' }}
                    to={`/image/${image.id}`}
                >
                    <img
                        className={
                            copied ? 'favoriteDarkCardImg' : 'favoriteCardImg'
                        }
                        src={image.urls.small}
                        alt="PhotoElementImg"
                    />

                    <div
                        className={
                            copied ? 'copiedMessage' : 'hiddenCopiedMessage'
                        }
                    >
                        Copied to clipboard
                    </div>
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

                <button
                    className={copied ? 'shareButtonClicked' : 'shareButton'}
                    onClick={handleCopied}
                >
                    {copied ? (
                        <DoneAllIcon style={{ width: '17px' }} />
                    ) : (
                        <ShareIcon style={{ width: '18px' }} />
                    )}
                </button>

                <button style={{ display: 'none' }} className="CardAuthor">
                    Author: <span>{image.user.name}</span>
                </button>
            </div>
        </>
    )
}

export default FavoritePhoto
