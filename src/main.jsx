import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import Sobre from './App2'
import Contato from './App3'

const router = createBrowserRouter([
  {
    children:[
        { 
        path: '/',
        element: <App/>
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
