import React from "react"
import Card from "../components/Card"
import AppContext from "../context"



function Favorites({ onAddToFavorite }) {
  const { favorites, onAddToCart } = React.useContext(AppContext)


  return (
    <div className="content p-40">
      <div className="d-flex flex-wrap aligh-center justify-between mb-40">
        <h1>My bookmarks</h1>
      </div>
      <div className='d-flex flex-wrap justify-center'>

        {favorites.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onPlus={(obj) => onAddToCart(obj)}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}

      </div>
    </div>
  )
}
export default Favorites