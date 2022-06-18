import React from 'react'
import styles from './Card.module.scss'

function Card({onFavorite, imageUrl, title, price, onPlus}) {
    const [isAdded, setIsAdded] = React.useState(false)

    const onClickPlus = () => {
        onPlus({imageUrl, title, price})
        setIsAdded(!isAdded)
    }

    React.useEffect(() => {
        //  console.log('variable changed ')
    }, [isAdded])

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="/img/heart-unlike.svg" alt="Unliked" />
            </div>
            <img
                width={133}
                height={115}
                src={imageUrl}
                alt="sneakers-green" />
            <h5>{title}</h5>
            <div className="d-flex justify-between">
                <div className="d-flex flex-column align-center">
                    <span>Price:</span>
                    <b>{price}$</b>
                </div>
                <div>
                    <img 
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? '/img/button-chacked.svg' : '/img/button-plus.svg'} 
                    alt="Plus" 

                    />
                </div>
            </div>
        </div>
    )
}
export default Card