import { Link, Route, Routes } from 'react-router-dom'
import Juego from './Juego';

const Home = () => <h1>Home</h1>

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>
          Juego de Back y Front
        </p>
      </header>
      <Link to="/">Home</Link>
      <br/> 
      <Link to="/juego">Juego</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juego" element={<Juego />} />
      </Routes>
    </div>
  );
}

export default App;