import FavList from './FavList'

type Props = {}
const Favorites = (props: Props) => {
    return (
        <div style={{ width: '95%', margin: 'auto' }}>
            <h2 style={{ textAlign: 'center' }}>Favorites</h2>
            <br />
            <FavList />
        </div>
    )
}
export default Favorites
