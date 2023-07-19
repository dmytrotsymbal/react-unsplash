import { Link } from 'react-router-dom'
import { Image } from 'utils/photosArray'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likesSlice'

type PhotoProps = {
    image: Image
}

const Photo = ({ image }: PhotoProps) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[image.id])
    const dispatch = useAppDispatch()

    return (
        <>
            <div className="PhotoElement">
                <img
                    className="CardImg"
                    src={image.urls.small}
                    alt="PhotoElementImg"
                />
                <button
                    className="likesButton"
                    onClick={() => {
                        isLiked
                            ? dispatch(removeLike(image.id))
                            : dispatch(addLike(image.id))
                    }}
                >
                    {isLiked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
                    <span>{image.likes}</span>
                </button>
                <div className="CardContent">
                    <Link
                        style={{ textDecoration: 'none' }}
                        to={`/image/${image.id}`}
                    >
                        <p className="CardLink">{image.alt_description}</p>
                    </Link>

                    <p className="CardAuthor">
                        Author: <span>{image.user.name}</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Photo
