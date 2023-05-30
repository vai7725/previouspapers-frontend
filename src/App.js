import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
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
import Verify from './components/login/Verify';
import Recover from './components/login/Recover';
import VerifyForRecover from './components/login/VerifyForRecover';
import ResetPass from './components/login/ResetPass';
import { ProtectRoute } from './middlewares/auth';
import Profile from './components/login/Profile';

function App() {
  const { state, dispatch } = GlobalContext();
  const { loaderProgress, isUserLoggedIn, formSessions } = state;

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
        <Route
          path="/contact"
          element={
            <ProtectRoute
              state={isUserLoggedIn}
              redirect={'/login'}
              Navigate={Navigate}
              message={'Please log in to access the contact form'}
            >
              <Contact />
            </ProtectRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contribute" element={<Earn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/verify"
          element={
            <ProtectRoute
              state={formSessions.verificationSession}
              redirect={'/signup'}
              Navigate={Navigate}
              message={'Session expired'}
            >
              <Verify />
            </ProtectRoute>
          }
        />
        <Route
          path="/recover"
          element={
            <ProtectRoute
              state={formSessions.passResetSession}
              redirect={'/login'}
              Navigate={Navigate}
              message={'Session expired'}
            >
              <Recover />
            </ProtectRoute>
          }
        />
        <Route
          path="/verifytorecover"
          element={
            <ProtectRoute
              state={formSessions.verificationSession}
              redirect={'/login'}
              Navigate={Navigate}
              message={'Session expired'}
            >
              <VerifyForRecover />
            </ProtectRoute>
          }
        />
        <Route
          path="/resetpassword"
          element={
            <ProtectRoute
              state={formSessions.verificationSession}
              redirect={'/login'}
              Navigate={Navigate}
              message={'Session expired'}
            >
              <ResetPass />
            </ProtectRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectRoute
              state={isUserLoggedIn}
              redirect={'/'}
              Navigate={Navigate}
              message={'Log in to see the profile'}
            >
              <Profile />
            </ProtectRoute>
          }
        />
        <Route path="/api/papers/:university" element={<Papers />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
