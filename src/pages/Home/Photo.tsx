import { Link } from 'react-router-dom'
import { Image } from 'utils/photosArray'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import ShareIcon from '@mui/icons-material/Share'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likesSlice'
import { addLikeCount, removeLikeCount } from 'redux/likesCountSlice'

type PhotoProps = {
    image: Image
}

const Photo = ({ image }: PhotoProps) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[image.id])
    const dispatch = useAppDispatch()

    const likesCount = useAppSelector(
        (state) => state.likesCountState.likesCount
    )

    return (
        <>
            <div className="PhotoElement">
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
                    }}
                >
                    {isLiked ? (
                        <ThumbUpAltIcon style={{ width: '17px' }} />
                    ) : (
                        <ThumbUpOffAltIcon style={{ width: '17px' }} />
                    )}

                    <span>{image.likes + likesCount}</span>
                </button>

                <button className="infoButton">
                    <p>info</p>
                </button>

                <button className="shareButton">
                    <ShareIcon style={{ width: '17px' }} />
                </button>

                <button style={{ display: 'none' }} className="CardAuthor">
                    Author: <span>{image.user.name}</span>
                </button>
            </div>
        </>
    )
}

export default Photo
