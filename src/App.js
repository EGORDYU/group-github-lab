import {
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom';

import Home from './components/pages/Home';
import Header from './components/partials/Header';
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Header>
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/about"
              element={<About />}
            />
          </Routes>
        </Header>
      </Router>

    </div>
  );
}

export default App;
