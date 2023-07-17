import PhotosList from './PhotosList'
import './Home.scss'
import { Container } from '@mui/material'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Container sx={{ padding: '0 20px' }}>
                <PhotosList />
            </Container>
        </>
    )
}
export default Home
