import React from 'react';
import axios from 'axios';
import Drawer from './components/Drawer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';




function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)




  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const cartResponse = await axios.get('https://62aafe60371180affbde9fc2.mockapi.io/cart')
      const favoritesResponse = await axios.get('https://62aafe60371180affbde9fc2.mockapi.io/favorites')
      const itemsResponse = await axios.get('https://62aafe60371180affbde9fc2.mockapi.io/items')
      setIsLoading(false)

      setItems(itemsResponse.data)
      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
    }
    fetchData()
  }, [])

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://62aafe60371180affbde9fc2.mockapi.io/cart/${obj.id}`)
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
    } else {
      axios.post('https://62aafe60371180affbde9fc2.mockapi.io/cart', obj)
      setCartItems(prev => [...prev, obj])
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62aafe60371180affbde9fc2.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://62aafe60371180affbde9fc2.mockapi.io/favorites/${obj.id}`)
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post('https://62aafe60371180affbde9fc2.mockapi.io/favorites', obj)
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Failed to add to favorites')
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  }


  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      favorites,
      isItemAdded,
      setCartOpened,
      setCartItems
    }}>
      <div className="wrapper clear">


        {cartOpened && <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}

        />}

        <Header
          onClickCart={() => setCartOpened(true)}
        />

        <Routes>
          <Route path="/favorite" element={

            <Favorites
              onAddToFavorite={onAddToFavorite}

            />} />

          <Route path="/" element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />} />
        </Routes>



      </div>
    </AppContext.Provider>
  );
}

export default App;
