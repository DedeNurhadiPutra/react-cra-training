import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <h1 className="brand">Deryx</h1>
      <nav className="nav">
        <Link className="nav-item" to='/'>Home</Link>
        <Link className="nav-item" to='/profile'>Profile</Link>
        <Link className="nav-item" to='/blog'>Blog</Link>
        <Link className="nav-item" to='/contact'>Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='blog' element={<Blog />}></Route>
        <Route path='blog/:id' element={<BlogDetail />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
