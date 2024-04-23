import './App.css'
import Navbar from './Componetes/navbar'
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
    </>
  )
}

export default App
