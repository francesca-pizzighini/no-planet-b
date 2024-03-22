import Navbar from './components/navbar/navbar.jsx'
import "./app.scss"
import { HelmetProvider, Helmet } from 'react-helmet-async'

function App() {

  return (
    <div 
      className="home"
    >
      <HelmetProvider>
        <Helmet>
          <title>There is no planet B</title>
          <meta 
            name="description"
            content="There is no planet B. Since half of 20th century scientists are warning us that human activity is interfering with normal climate change of the planet, and we still haven't done anithing drastic to change things. We put information togheter to help clarifying the situation for everyone who still have doubts. Navigating the different pages you'll see data about the variation in temparature, carbon dioxide, methane and nitrous oxide concentration in the air, polar ice situation and ocean temperature. We hope this will help in sensitize people to act, and to vote for someone who'll care for our future"
          ></meta>
          <meta 
            name="keywords" 
            content="climate-change temperature co2 carbon-dioxide methane no2 nitrous-oxide polar-ice ocean-temperature ocean-warming act-now graphs information"
          ></meta>
        </Helmet>
      </HelmetProvider>

      <div 
        className="home-title"
      >
        <h2 
          className="first-row"
        >There is no</h2>
        <h2
          className='second-row'
        >planet B</h2>
      </div>

      <Navbar/>
    </div>
  )
}

export default App
