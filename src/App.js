import React from 'react'
import Card from './components/Card'
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = [
  { title: 'Men’s Sneakers Nike Blazer Mid Suede', price: 100, imageUrl: '/img/sneakers/sneakers-green.jpg' },
  { title: 'Men’s Sneakers Puma X Aka Boku Future Rider', price: 110, imageUrl: '/img/sneakers/2.jpg' },
  { title: 'Men’s Sneakers Under Armour Curry 8', price: 120, imageUrl: '/img/sneakers/3.jpg' },
  { title: 'Men’s Sneakers Nike Kyrie 7', price: 130, imageUrl: '/img/sneakers/4.jpg' },
  // { name: 'Men’s Sneakers Jordan Air Jordan 11', price: 140, imageUrl: '/img/sneakers/2.jpg' },
  // { name: 'Men’s Sneakers Nike Air Max 270 ', price: 150, imageUrl: '/img/sneakers/2.jpg' }
]

function App() {
  const [ cardOpened, setCardOpened] = React.useState(false)




  

  return (
    <div className="wrapper clear"> 
      {cardOpened ? <Drawer /> : null}
      <Header />


      <div className="content p-40">
        <div className="d-flex aligh-center justify-between mb-40">
          <h1 >All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Search ..." />
          </div>
        </div>
        <div className='d-flex'>

          {arr.map((obj) => (
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
