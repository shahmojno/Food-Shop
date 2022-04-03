
import { useEffect, useState } from 'react';
import './App.css';

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

    <div>

      <h1>Names: {foods.length}</h1>
      {
        foods.map(food => <Foods id={food.id} name={food.name} img={food.img}></Foods>)
      }

    </div >
  )

}

function Foods(props) {
  return (
    <div>
      <h4> Id : {props.id}</h4>
      <p>Name : {props.name}</p>
      <p>img : {props.img}</p>
      <div className='photo'>
        <img src={props.img} alt="" />
      </div>

    </div>
  )
}

export default App;

