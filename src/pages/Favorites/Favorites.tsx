import { useAppSelector } from 'redux/hooks'
import './FavoritesPage.scss'
import FavList from './FavList'

type Props = {}
const Favorites = (props: Props) => {
    const sunnyTheme = useAppSelector((state) => state.theme.sunnyTheme)
    return (
        <div className="favoritesPage" style={{ width: '95%', margin: 'auto' }}>
            <h2
                className={
                    sunnyTheme ? 'favoritesTitle' : 'favoritesTitle-dark'
                }
            >
                Favorites
            </h2>
            <FavList />
        </div>
    )
}
export default Favorites
