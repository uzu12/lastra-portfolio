import './App.css';
import About from './components/About';
import Certificates from './components/Certificates';
import Educ from './components/Educ';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Educ />
      <Certificates />
    </div>
  );
}

export default App;
