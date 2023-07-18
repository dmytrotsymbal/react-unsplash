import './Pagination.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

type Props = {
    nextPageFunction: () => void
    prevPageFunction: () => void
}
const Pagination = ({ nextPageFunction, prevPageFunction }: Props) => {
    return (
        <div className="Pagination">
            <div className="buttonsBlock">
                <button onClick={prevPageFunction}>
                    <ArrowBackIosNewIcon />
                </button>
                <button onClick={nextPageFunction}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    )
}
export default Pagination
