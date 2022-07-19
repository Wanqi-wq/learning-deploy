import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>当前在 Home 页面--production -lint and test hahhaha</h1>
        <div>learn react</div>
        <Link to="/about" className="App-link">About</Link>
      </header>
    </div>
  )
}

function About() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>当前在 About 页面</h1>
        <Link to="/" className="App-link">Home</Link>
      </header>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
