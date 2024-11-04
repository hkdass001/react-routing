import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>

      <div>
        <nav>
          <ul>
            <li> <Link to = "/">Home</Link> </li>
            <li> <Link to = "/about">About</Link></li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
      </Routes>

    </Router>
  );
}

export default App;
