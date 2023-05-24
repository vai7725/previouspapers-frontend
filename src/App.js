import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/About';
import Papers from './components/papers/Papers';
import Error from './components/Error';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar';
import { GlobalContext } from './context/Context';
import Earn from './components/earn/Contribute';
import Login from './components/login/Login';
import Signup from './components/login/Signup';

function App() {
  const { state, dispatch } = GlobalContext();
  const { loaderProgress } = state;
  return (
    <Router>
      <LoadingBar
        color="#f11946"
        progress={loaderProgress}
        onLoaderFinished={() =>
          dispatch({ type: 'SET_PROGRESS_BAR', payload: 0 })
        }
      />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/contribute" element={<Earn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/api/papers/:university" element={<Papers />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
