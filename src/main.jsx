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
import No2 from "./pages/no2.jsx"
import PolarIce from "./pages/polarIce.jsx"
import OceanWarming from "./pages/oceanWarming.jsx"
import ErrorPage from "./pages/errorPage.jsx"
import ChartPage from './pages/chartPage/chartPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/data",
    element: <ChartPage/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "temperature", 
        element: <Temperature/>,
        errorElement: <ErrorPage/>
      },
      {
        path: "carbon-dioxide", 
        element: <Co2/>,
        errorElement: <ErrorPage/>
      },
      {
        path: "methane", 
        element: <Methane/>,
        errorElement: <ErrorPage/>
      },
      {
        path: "nitrous-oxide", 
        element: <No2/>,
        errorElement: <ErrorPage/>
      },
      {
        path: "polar-ice", 
        element: <PolarIce/>,
        errorElement: <ErrorPage/>
      },
      {
        path: "ocean-warming", 
        element: <OceanWarming/>,
        errorElement: <ErrorPage/>
      },
    ]
  },
  // {
  //   path: "/temperature",
  //   element: <Temperature/>,
  //   errorElement: <ErrorPage/>
  // },
  // {
  //   path: "/carbon-dioxide",
  //   element: <Co2/>,
  //   errorElement: <ErrorPage/>
  // },
  // {
  //   path: "/methane",
  //   element: <Methane/>,
  //   errorElement: <ErrorPage/>
  // },
  // {
  //   path: "/nitrous-oxide",
  //   element: <No2/>,
  //   errorElement: <ErrorPage/>
  // },
  // {
  //   path: "/polar-ice",
  //   element: <PolarIce/>,
  //   errorElement: <ErrorPage/>
  // },
  // {
  //   path: "/ocean-warming",
  //   element: <OceanWarming/>,
  //   errorElement: <ErrorPage/>
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
