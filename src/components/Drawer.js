function Drawer() {
    return (

        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-20">
                    Cart
                    <img className="removeBtn cu-p" src="/img/button-remove.svg" alt="Remove" />
                </h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">

                        <div style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }} className="cartItemImg">

                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Nike Air Max 270 Men’s Sneakers</p>
                            <b>65 $</b>
                        </div>
                        <img className="removeBtn" src="/img/button-remove.svg" alt="Remove" />
                    </div>

                    <div className="cartItem d-flex align-center">

                        <div style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }} className="cartItemImg">

                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Nike Air Max 270 Men’s Sneakers</p>
                            <b>65 $</b>
                        </div>
                        <img className="removeBtn" src="/img/button-remove.svg" alt="Remove" />
                    </div>
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