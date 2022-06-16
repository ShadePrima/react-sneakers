import React from 'react'
import Card from './components/Card'
import Drawer from './components/Drawer';
import Header from './components/Header';



function App() {
  const [items, setItems] = React.useState([
    {
     "title": "Men’s Sneakers Nike Blazer Mid Suede",
     "price": 100,
     "imageUrl": "/img/sneakers/1.jpg"
    },
    {
     "title": "Men’s Sneakers Puma X Aka Boku Future Rider",
     "price": 110,
     "imageUrl": "/img/sneakers/2.jpg"
    },
    {
     "title": "Men’s Sneakers Under Armour Curry 8",
     "price": 120,
     "imageUrl": "/img/sneakers/3.jpg"
    },
    {
     "title": "Men’s Sneakers Nike Kyrie 7",
     "price": 130,
     "imageUrl": "/img/sneakers/4.jpg"
    },
    {
     "title": "Men’s Sneakers Puma X Aka Boku Future Rider",
     "price": 126,
     "imageUrl": "/img/sneakers/5.jpg"
    },
    {
     "title": "Men’s Sneakers Under Armour Curry 8",
     "price": 96,
     "imageUrl": "/img/sneakers/6.jpg"
    },
    {
     "title": "Men’s Sneakers Nike Kyrie 7",
     "price": 108,
     "imageUrl": "/img/sneakers/7.jpg"
    },
    {
     "title": "Men’s Sneakers Jordan Air Jordan 11",
     "price": 104,
     "imageUrl": "/img/sneakers/8.jpg"
    },
    {
     "title": "Men’s Sneakers Nike LeBron XVIII",
     "price": 114,
     "imageUrl": "/img/sneakers/9.jpg"
    },
    {
     "title": "Men’s Sneakers Nike Lebron XVIII Low",
     "price": 119,
     "imageUrl": "/img/sneakers/10.jpg"
    },
    {
     "title": "Men’s Sneakers Nike Blazer Mid Suede",
     "price": 142,
     "imageUrl": "/img/sneakers/11.jpg"
    },
    {
     "title": "Кроссовки Puma X Aka Boku Future Rider",
     "price": 132,
     "imageUrl": "/img/sneakers/12.jpg"
    }
   ])
  const [cartOpened, setCartOpened] = React.useState(false)




  return (
    <div className="wrapper clear">


      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}

      <Header
        onClickCart={() => setCartOpened(true)}
      />


      <div className="content p-40">
        <div className="d-flex aligh-center justify-between mb-40">
          <h1 >All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Search ..." />
          </div>
        </div>
        <div className='d-flex flex-wrap'>

          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorite={() => console.log('Add to bookmarks')}
              onPlus={() => console.log('Сlicked plus')}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
