import React from 'react'
import styles from './Card.module.scss'

function  Card({ onFavorite, imageUrl, title, price, onPlus, id, favorited = false }) {

    const [isAdded, setIsAdded] = React.useState(false)
    const [isFavorite, setIsFavorite] = React.useState(favorited)

    const onClickPlus = () => {
        onPlus({ id, imageUrl, title, price })
        setIsAdded(!isAdded)
    }


    const onClickFavorite = () => {
        onFavorite({ id, imageUrl, title, price })
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            <div  className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "/img/heart-like.svg" : "/img/heart-unlike.svg"} alt="Liked" />
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