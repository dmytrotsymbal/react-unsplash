import PhotosList from './PhotosList'
import './Home.scss'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <div style={{ width: '95%', margin: 'auto' }}>
                <PhotosList />
            </div>
        </>
    )
}
export default Home
