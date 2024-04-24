import './App.css'
import Navbar from './Componetes/navbar'
import Text from './Componetes/Text'
import TextImg from './imgs/Hero image.png'
import {Outlet} from 'react-router-dom'


function App() {

  return (
    <>
    <Navbar/>
      <main className='Main1'>
        <Text />
        <img src={TextImg} alt="" />
      </main>
      <Outlet/>
    </>
  )
}

export default App
