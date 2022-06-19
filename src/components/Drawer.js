function Drawer({ onClose, onRemove, items = [] }) {
    console.log(items)
    return (

        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-20">
                    Cart
                    <img onClick={onClose} className="removeBtn cu-p" src="/img/button-remove.svg" alt="Remove" />
                </h2>

                {
                    items.length > 0 ? (
                        <div>
                            <div className="items">
                                {items.map((obj) => (
                                    <div className="cartItem d-flex align-center">

                                        <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg">

                                        </div>
                                        <div className="mr-20 flex">
                                            <p className="mb-5">{obj.title}</p>
                                            <b>{obj.price} $</b>
                                        </div>
                                        <img
                                            onClick={() => onRemove(obj.id)}
                                            className="removeBtn"
                                            src="/img/button-remove.svg"
                                            alt="Remove"

                                        />
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
                    )
                        : (<div className='cartEmpty d-flex align-center justify-center flex-column flex'>
                            <img className='mb-20' width='120px' heigth='120px' src="/img/empty-cart.jpg" alt="Empty" />
                            <h2>Cart empty</h2>
                            <p className='opaciti-6'>Add at least one pair of sneakers to order</p>
                            <button className="greenButton">
                                <img src="/img/arrow.svg" alt="Arrow" />
                                Сome back
                            </button>
                        </div>)
                }
            </div>
        </div>

    );
}
export default Drawer;