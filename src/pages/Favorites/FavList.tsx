import Photo from 'pages/Home/Photo'
import Masonry from 'react-masonry-css'
import { useAppSelector } from 'redux/hooks'
import { Image } from 'redux/unsplashSlice'

type Props = {}

const FavList = (props: Props) => {
    // Получаем список избранных изображений из состояния
    const favoriteImages = useAppSelector(
        (state) => state.favoritesState.images
    )

    const breakpointColumnsObj = {
        default: 6,
        1100: 3,
        700: 2,
    }

    return (
        <div>
            {favoriteImages.length === 0 ? (
                <div style={{ textAlign: 'center' }}>
                    No favorite images yet.
                </div>
            ) : (
                <div>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="masonry-grid"
                        columnClassName="masonry-grid-column"
                    >
                        {favoriteImages.map((image: Image) => (
                            <div key={image.id}>
                                <Photo image={image} />
                            </div>
                        ))}
                    </Masonry>
                </div>
            )}
        </div>
    )
}

export default FavList
