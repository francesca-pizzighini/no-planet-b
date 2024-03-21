import Navbar from './components/navbar/navbar.jsx'
import "./app.scss"

function App() {

  return (
    <div 
      className="home"
    >
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
