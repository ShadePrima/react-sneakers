function Drawer({ onClose, items = [] }) {
    console.log(items)
    return (

        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-20">
                    Cart
                    <img onClick={onClose} className="removeBtn cu-p" src="/img/button-remove.svg" alt="Remove" />
                </h2>

                <div className="items">
                    {items.map((obj) => (
                        <div className="cartItem d-flex align-center">

                            <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg">

                            </div>
                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price} $</b>
                            </div>
                            <img className="removeBtn" src="/img/button-remove.svg" alt="Remove" />
                        </div>
                    ))}


                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Total:</span>
                            <div></div>
                            <b>100$</b>
                        </li>
                        <li>
                            <span>Fax 5 %</span>
                            <div></div>
                            <b>95$ </b>
                        </li>
                    </ul>
                    <button className="greenButton">
                        Сheckout
                        <img src="/img/arrow-right.svg" alt="Arrow" />
                    </button>
                </div>

            </div>
        </div>

    );
}
export default Drawer;