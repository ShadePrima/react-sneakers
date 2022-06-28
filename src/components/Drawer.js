import React from "react";
import axios from "axios";
import AppContext from "../context";
import Info from "./Info";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


function Drawer({ onClose, onRemove, items = [] }) {
    const { cartItems, setCartItems } = React.useContext(AppContext)
    const [orderId, setOrderId] = React.useState(null)
    const [isOrderComplete, setIsOrderComplete] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)



    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.post('https://62aafe60371180affbde9fc2.mockapi.io/orders', {
                items: cartItems
            })
            setOrderId(data.id)
            setIsOrderComplete(true)
            setCartItems([])

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i]
                await axios.delete('https://62aafe60371180affbde9fc2.mockapi.io/cart/' + item.id)
                await delay(1000)
            }



        } catch (error) {
            alert('The order could not be created')
        }
        setIsLoading(false)
    }


    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-20">
                    Cart
                    <img onClick={onClose} className="removeBtn cu-p" src="/img/button-remove.svg" alt="Remove" />
                </h2>

                {
                    items.length > 0 ? (
                        <div className='d-flex flex-column flex'>
                            <div className="items">
                                {items.map((obj) => (
                                    <div key={obj.id} className="cartItem d-flex align-center">

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
                                        <b>{totalPrice}$</b>
                                    </li>
                                    <li>
                                        <span>Fax 5 %</span>
                                        <div></div>
                                        <b>{totalPrice / 100 * 5}$ </b>
                                    </li>
                                </ul>
                                <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                                    Сheckout
                                    <img src="/img/arrow-right.svg" alt="Arrow" />
                                </button>
                            </div>
                        </div>
                    )
                        : (
                            <Info
                                title={isOrderComplete ? 'Order completed' : 'Cart empty'}
                                description={isOrderComplete
                                    ? `Your order № ${orderId} will soon be transferred to the delivery service`
                                    : 'Add at least one pair of sneakers to order'}
                                image={isOrderComplete ? '/img/complete-order.png' : '/img/empty-cart.jpg'}
                            />
                        )
                }
            </div>
        </div>

    );
}
export default Drawer;