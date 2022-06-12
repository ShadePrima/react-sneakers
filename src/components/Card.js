function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart-unlike.svg" alt="Unliked" />
            </div>
            <img
                width={133}
                height={115}
                src="img/sneakers/sneakers-green.jpg"
                alt="sneakers-green" />
            <h5>Men’s Sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
                <div className="d-flex flex-column align-center">
                    <span>Price:</span>
                    <b>250$</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="img/plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
    )
}
export default Card