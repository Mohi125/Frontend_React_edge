
import './App.css'
import Detail from './components/Detail'
import FIrstComponent from './components/FIrstComponent'

const fun = ()=>{
  return <button>press</button>
}

const data={
  name:"mohi",
  favFoods:["biryani",'beef','ice-cream']
}


const product = [
  {
    product_id : 1,
    name:"bag",
    color:["red","green","blue"],
    p_details:<Detail></Detail>
  },
  {
    product_id : 2,
    name:"bat",
    color:["red","green","blue"],
    p_details:<Detail></Detail>
  },
  {
    product_id : 1,
    name:"ball",
    color:["red","green","blue"],
    p_details:<Detail></Detail>
  }
]


function App() {


  return (
    <>
      <div>
         
         <FIrstComponent product = {product}></FIrstComponent>
         
      </div>

    </>
  )
}

export default App
