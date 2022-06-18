import React from 'react'
import Card from './components/Card'
import Drawer from './components/Drawer';
import Header from './components/Header';



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch('https://62aafe60371180affbde9fc2.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json)
      });
  }, []) 

  const onAddToCart= (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">


      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}

      <Header
        onClickCart={() => setCartOpened(true)}
      />


      <div className="content p-40">
        <div className="d-flex flex-wrap aligh-center justify-between mb-40">
          <h1 >{searchValue ? `Search for: ${searchValue}` : `All Sneakers`}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/button-remove.svg" alt="Close" />}
            <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Search ..." />
          </div>
        </div>
        <div className='d-flex flex-wrap justify-center'>

          {items
          .filter((item) => item.title.toLowerCase().includes(searchValue) )
          .map((item, index) => (
            <Card
              key={index} 
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('Add to bookmarks')}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
