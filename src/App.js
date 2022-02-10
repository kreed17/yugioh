import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import AllCards from './pages/AllCards';
import CardPage from './pages/CardPage';
import Home from './pages/Home';
import SampleHand from './pages/SampleHand';

function App() {
  return (
    <div className='app'>
      <Router>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/allcards' element={<AllCards />} />
              <Route path='/cards/:id' element={<CardPage />} /> 
              <Route path= '/gethand' element = { <SampleHand />} />
            </Routes>
          </Router>
    </div>
    
  );
}

export default App;
