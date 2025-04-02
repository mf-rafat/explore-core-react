import Counter from './counter';
import './App.css'
import ToDo from './todo';
import players from './players';
import Players from './players';
function App() {


  return (
    <>

      <h1>Vite + React</h1>
        <Card></Card>
        <Person></Person>
        <ToDo task='learn react '> </ToDo>

        <Counter></Counter>

 <Players></Players>
    </>
  )
}



function Card(props) {
  return (
    <div className='card-style'>
      <h2>card-dress</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum reprehenderit praesentium quas est iure! Dicta, sequi ab provident necessitatibus praesentium ratione corrupti aliquid incidunt ducimus sit cupiditate, quos veniam consectetur?</p>

      <button onClick={handleClick}>order now</button>

      <button onClick={function handleClick2(){
        alert('second order Now')
      }}>second order now</button>

      <button onClick={handleClick3}> click 3</button>

      <button onClick={() => alert('hy click 04 ') }> click 4 </button>

      <button onClick={ ()  => handleAdd5(10)}> click 5 add </button>
    </div>
  )
}
function Person() {
 const style ={
  color:'rad',
  fontSize:'30px',
  backgroundColor:'grayLite',
  borderRedius:'10px'
 };
  return (
    <div  style={style}>
      <h2>card-dress-two</h2>
    </div>
  )
}

// // -------------------------

// ?

// handle event react (onclick)
//way one 

function handleClick(){

  alert('im a the click')

}

// way three

const handleClick3 = ( ) =>{
  alert('i am the click number three ')
}

// way 5 

const  handleAdd5 = (num) =>{
  const  newNum = num + 7 ;
  alert(newNum);
}



export default App
