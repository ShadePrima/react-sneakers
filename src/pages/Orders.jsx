import React from "react"
import axios from "axios"
import Card from "../components/Card"
import AppContext from "../context"

function Orders() {
    const { onAddToFavorite, onAddToCart } = React.useContext(AppContext)
    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://62aafe60371180affbde9fc2.mockapi.io/orders')
                // console.log(data.map((obj) => obj.items).flat())
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            } catch (error) {
                alert('Order request error')
                console.log(error)
            }
        })()
    }, [])

    return (
        <div className="content p-40">
            <div className="d-flex flex-wrap aligh-center justify-between mb-40">
                <h1>My orders</h1>
            </div>
            <div className='d-flex flex-wrap justify-center'>

                {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                    <Card
                        key={index}
                        loading={isLoading}
                        {...item}
                    />
                ))}

            </div>
        </div>
    )
}
export default Orders