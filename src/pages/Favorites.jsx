import Card from "../components/Card"


function Favorites ({items, onAddToFavorite}) {
    return (
        <div className="content p-40">
        <div className="d-flex flex-wrap aligh-center justify-between mb-40">
          <h1>My bookmarks</h1>
        </div>
        <div className='d-flex flex-wrap justify-center'>

        {items            
            .map((item, index) => (
              <Card
                key={index}               
                favorited={true}
                onFavorite={onAddToFavorite}
                {...item}
              />
            ))}
          
        </div>
      </div>
    )
}
export default Favorites