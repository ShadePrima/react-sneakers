import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)



  React.useEffect(() => {
    axios.get('https://62aafe60371180affbde9fc2.mockapi.io/items').then(res => {
      setItems(res.data)
    })
    axios.get('https://62aafe60371180affbde9fc2.mockapi.io/cart').then(res => {
      setCartItems(res.data)
    })
    axios.get('https://62aafe60371180affbde9fc2.mockapi.io/favorites').then(res => {
      setFavorites(res.data)
    })
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://62aafe60371180affbde9fc2.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62aafe60371180affbde9fc2.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onAddToFavorite = (obj) => {
    if (favorites.find(favObj => favObj.id === obj.id)) {
      axios.delete(`https://62aafe60371180affbde9fc2.mockapi.io/favorites/${obj.id}`)
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id ))
    } else {
      axios.post('https://62aafe60371180affbde9fc2.mockapi.io/favorites', obj)
      setFavorites((prev) => [...prev, obj])       
    }
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

      <Routes>
        <Route path="/favorite" element={<Favorites
          onAddToFavorite={onAddToFavorite}
          items={favorites}
        />} />
        <Route path="/" element={<Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />} />
      </Routes>



    </div>
  );
}

export default App;
