import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import OurStory from './pages/OurStory/OurStory'
import Services from './pages/Services/Services'
import OurWork from './pages/OurWork/OurWork'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<OurStory />} />
          <Route path='/services' element={<Services />} />
          <Route path='/work' element={<OurWork />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
