import './Pagination.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

type Props = {
    nextPage: () => void
    prevPage: () => void
}

const Pagination = ({ nextPage, prevPage }: Props) => {
    return (
        <div className="Pagination">
            <div className="buttonsBlock">
                <button onClick={() => prevPage()}>
                    <ArrowBackIosNewIcon />
                </button>
                <button onClick={() => nextPage()}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    )
}

export default Pagination
