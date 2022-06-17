import React from 'react'
import Card from './components/Card'
import Drawer from './components/Drawer';
import Header from './components/Header';



function App() {
  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch('https://62aafe60371180affbde9fc2.mockapi.io/items')
      .then(res => {
        return res.json();
      })
      .then(json => {
        setItems(json)
      });
  }, [])
 
  fetch('https://62aafe60371180affbde9fc2.mockapi.io/items')
    .then(res => {
      return res.json();
    })
    .then(json => {
      setItems(json)
    });


  return (
    <div className="wrapper clear">


      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}

      <Header
        onClickCart={() => setCartOpened(true)}
      />


      <div className="content p-40">
        <div className="d-flex flex-wrap aligh-center justify-between mb-40">
          <h1 >All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Search ..." />
          </div>
        </div>
        <div className='d-flex flex-wrap justify-center'>

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
