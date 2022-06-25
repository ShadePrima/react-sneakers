import React from 'react'
import ContentLoader from "react-content-loader"
import AppContext from '../../context'
import styles from './Card.module.scss'

function Card({
    id,
    title,
    imageUrl,
    price,
    onFavorite,
    onPlus,
    favorited = false,
    loading = false
}) { 

    const {isItemAdded} = React.useContext(AppContext)
    const [isFavorite, setIsFavorite] = React.useState(favorited) 


    const onClickPlus = () => {
        onPlus({ id, imageUrl, title, price })

    }


    const onClickFavorite = () => {
        onFavorite({ id, imageUrl, title, price })
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            {loading
                ? <ContentLoader
                    speed={1}
                    width={160}
                    height={210}
                    viewBox="0 0 150 210"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"

                >
                    <rect x="0" y="0" rx="5" ry="5" width="150" height="90" />
                    <rect x="0" y="106" rx="5" ry="5" width="150" height="15" />
                    <rect x="0" y="131" rx="5" ry="5" width="93" height="15" />
                    <rect x="0" y="185" rx="5" ry="5" width="80" height="24" />
                    <rect x="116" y="176" rx="5" ry="5" width="32" height="32" />
                </ContentLoader>
                :
                <>
                    <div className={styles.favorite} onClick={onClickFavorite}>
                        <img src={isFavorite ? "/img/heart-like.svg" : "/img/heart-unlike.svg"} alt="Liked" />
                    </div>
                    <img
                        width='100%'
                        height={135}
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
                                src={isItemAdded(id) ? '/img/button-chacked.svg' : '/img/button-plus.svg'}
                                alt="Plus"

                            />
                        </div>
                    </div>
                </>
            }

        </div>
    )
}
export default Card