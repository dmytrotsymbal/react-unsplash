import PhotosList from './PhotosList'
import './Home.scss'
import Slider from './Slider'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <div style={{ width: '95%', margin: 'auto' }}>
                <Slider />
                <PhotosList />
            </div>
        </>
    )
}
export default Home
