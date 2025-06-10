
import './App.css'
import C1 from './Components/C1'
import DataState from './context/DataContext/DataState'

const App = ()=>{
  const obj={
    name:'suman',
  }


  return (
    <>
    <DataState>
   <div>
    <h1>App</h1>
    <C1/>
   </div>
   </DataState>
   </>
  )
}

export default App
