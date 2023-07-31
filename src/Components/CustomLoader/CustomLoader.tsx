import { useAppSelector } from 'redux/hooks'
import './CustomLoader.scss'
type Props = {}
const CustomLoader = (props: Props) => {
    const sunnyTheme = useAppSelector((state) => state.theme.sunnyTheme)
    return (
        <div
            className={
                sunnyTheme
                    ? 'custom-loader-container'
                    : 'custom-loader-container-dark'
            }
        >
            <div className="custom-loader"></div>
        </div>
    )
}
export default CustomLoader
