import Card from "../components/Card"

function Home ({searchValue, setSearchValue, onChangeSearchInput, items, onAddToFavorite, onAddToCart}) {
    return (
        <div className="content p-40">
        <div className="d-flex flex-wrap aligh-center justify-between mb-40">
          <h1 >{searchValue ? `Search for: ${searchValue}` : `All goods`}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/button-remove.svg" alt="Close" />}
            <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Search ..." />
          </div>
        </div>
        <div className='d-flex flex-wrap justify-center'>

          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item, index) => (
              <Card
                key={index}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                {...item}
              />
            ))}
        </div>
      </div>
    )
}
export default Home