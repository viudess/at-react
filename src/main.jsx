import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import Sobre from './App2'
import Contato from './App3'
import Text from './Componetes/Text'

const router = createBrowserRouter([
  {
      path: '/',
      element: <App/>,
      children:[
        {
        index:true, 
        element: <Text/>
      },
        {
          path: 'sobre',
          element: <Sobre/>,
      },
      {
          path: 'contato',
          element: <Contato/>,
      }
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>,
   )
