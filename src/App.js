import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  console.log(items)
console.log(cartItems)

  React.useEffect(() => {
    axios.get('https://62aafe60371180affbde9fc2.mockapi.io/items').then(res => {
      setItems(res.data)
    })
    axios.get('https://62aafe60371180affbde9fc2.mockapi.io/cart').then(res => {
      setCartItems(res.data)
    })
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://62aafe60371180affbde9fc2.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    console.log(id)
    axios.delete(`https://62aafe60371180affbde9fc2.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))

  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">


      {cartOpened && <Drawer
        items={cartItems}
        onClose={() => setCartOpened(false)}
        onRemove={onRemoveItem}

      />}

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
            .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item, index) => (
              <Card
                key={index}
                id={item.id}
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
