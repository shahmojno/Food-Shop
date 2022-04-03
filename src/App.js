
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './component/cart/Cart';

function App() {
  return (
    <div>
      <h1>This food shop:</h1>
      <LoadData></LoadData>
    </div>
  );
}

function LoadData() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setFoods(data))
  }, [])
  return (


    <div className='food-container'>
      <div className='foods-container'>

        {
          foods.map(food => <Foods id={food.id} name={food.name} img={food.img} price={food.price}></Foods>)
        }

      </div >

      <div className="cart-container">
        <Cart> </Cart>
      </div>
    </div>

  );

}

function Foods(props) {
  return (
    <div className='photo'>
      <div >
        <h4> Id : {props.id}</h4>
        <p>Name : {props.name}</p>
        <p>Price : {props.price}</p>
        <img src={props.img} alt="" />
      </div>
    </div>
  )
}

export default App;



