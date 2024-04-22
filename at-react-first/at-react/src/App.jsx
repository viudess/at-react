import './App.css'
import {Outlet} from 'react-router-dom'
import Navbar from './Componetes/Navbar'
import Text from './Componetes/Text'
import Textimg from './imgs/Hero image.png'

function App() {

  return (
    <>
      <Navbar />
      <main className='Main1'>
        <Text />
        <img src={Textimg} alt="" />
      </main>
      <Outlet />
    </>
  )
}

export default App
