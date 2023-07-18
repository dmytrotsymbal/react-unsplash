import './Pagination.scss'

type Props = {
    nextPageFunction: () => void
    prevPageFunction: () => void
}
const Pagination = ({ nextPageFunction, prevPageFunction }: Props) => {
    return (
        <div className="Pagination">
            <div className="buttonsBlock">
                <button onClick={prevPageFunction}>prev</button>
                <button onClick={nextPageFunction}>next</button>
            </div>
        </div>
    )
}
export default Pagination
