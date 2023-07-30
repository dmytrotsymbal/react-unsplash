import { useAppSelector } from 'redux/hooks'
import MobilesList from './MobilesList'
import './Mobiles.scss'

type Props = {}
const Mobiles = (props: Props) => {
    const sunnyTheme = useAppSelector((state) => state.theme.sunnyTheme)
    return (
        <div style={{ width: '95%', margin: 'auto' }}>
            <h2 className={sunnyTheme ? 'mobilesTitle' : 'mobilesTitle-dark'}>
                Mobiles wallpapers
            </h2>
            <MobilesList />
        </div>
    )
}
export default Mobiles
