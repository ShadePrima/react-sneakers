import React from 'react'
import styles from './Card.module.scss'

function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false)

    const onClickPlus = () => {
        setIsAdded(!isAdded)
    }
    console.log(isAdded)

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onFavorite}>
                <img src="/img/heart-unlike.svg" alt="Unliked" />
            </div>
            <img
                width={133}
                height={115}
                src={props.imageUrl}
                alt="sneakers-green" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between">
                <div className="d-flex flex-column align-center">
                    <span>Price:</span>
                    <b>{props.price}$</b>
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