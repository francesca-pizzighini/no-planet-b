import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import { Provider } from 'react-redux'
import store from "./app/store.jsx"

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Temperature from "./pages/temperature.jsx"
import Co2 from "./pages/co2.jsx"
import Methane from "./pages/methane.jsx"
import N2o from "./pages/n2o.jsx"
import PolarIce from "./pages/polarIce.jsx"
import OceanWarming from "./pages/oceanWarming.jsx"
import ChartPage from './pages/chartPage/chartPage.jsx'
import ErrorPage from "./pages/error/errorPage.jsx"
import ErrorElement from './pages/error/errorElement.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/data",
    element: <ChartPage/>,
    children: [
      {
        path: "temperature", 
        element: <Temperature/>,
      },
      {
        path: "carbon-dioxide", 
        element: <Co2/>,
      },
      {
        path: "methane", 
        element: <Methane/>,
      },
      {
        path: "nitrous-oxide", 
        element: <N2o/>,
      },
      {
        path: "polar-ice", 
        element: <PolarIce/>,
      },
      {
        path: "ocean-warming", 
        element: <OceanWarming/>,
      },
      {
        path:"*",
        element: <ErrorElement/>
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
