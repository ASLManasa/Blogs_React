import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "WELCOME TO BLOGs";
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Home />
      </div>
        
    </div>
  );
}

export default App;
