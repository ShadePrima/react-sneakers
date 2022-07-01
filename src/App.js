import React from 'react';
import axios from 'axios';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';
import Orders from './pages/Orders';


function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)



  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get('https://62aafe60371180affbde9fc2.mockapi.io/cart'),
          axios.get('https://62aafe60371180affbde9fc2.mockapi.io/favorites'),
          axios.get('https://62aafe60371180affbde9fc2.mockapi.io/items')
        ])

        setIsLoading(false)
        setItems(itemsResponse.data)
        setCartItems(cartResponse.data)
        setFavorites(favoritesResponse.data)
      } catch (error) {
        alert('Data query error')
        console.error(error)
      }

    }
    fetchData()
  }, [])

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)))
        await axios.delete(`https://62aafe60371180affbde9fc2.mockapi.io/cart/${findItem.id}`)
      } else {
        setCartItems((prev) => [...prev, obj ])
        const { data } = await axios.post('https://62aafe60371180affbde9fc2.mockapi.io/cart', obj)
        setCartItems((prev) => prev.map((item) => {
          if (item.parentId === data.parentId) {
             return {
               ...item,
               id: data.id
             }
          } else {
            return item
          }
        }))
      }
    } catch (error) {
      alert('Error adding a card to the cart')
      console.error(error)
    }
  }

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://62aafe60371180affbde9fc2.mockapi.io/cart/${id}`)
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
    } catch (error) {
      alert("Error remove item of cart")
      console.error(error)
    }
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
      console.error(error)
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      favorites,
      isItemAdded,
      setCartOpened,
      setCartItems,
      onAddToCart,
      onAddToFavorite
    }}>
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}

        />



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

          <Route path="/orders" element={
            <Orders />
          } />
        </Routes>



      </div>
    </AppContext.Provider>
  );
}

export default App;
