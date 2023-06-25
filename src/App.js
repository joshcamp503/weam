// STYLESHEETS
import './App.css';
// COMPONENTS
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import SubRequest from './pages/SubRequest/SubRequest';
// import FadeMenu from './components/FadeMenu';
import Profile from './pages/Profile/Profile';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// HOOKS
import { useAuthContext } from './hooks/auth/useAuthContext';
import { useTheme } from './hooks/useTheme';
// MUI
import Grid from '@mui/material/Grid'
import { ThemeProvider } from '@mui/material';
// MEDIA
import MainBgImage from './assets/main-bg-image.png'
import TagLine from './components/TagLine';

function App() {
  const { user, authIsReady } = useAuthContext()
  const { theme } = useTheme()
  
  const appStyles = { 
    height: '100%', 
    backgroundImage: `url(${MainBgImage})`, 
    backgroundSize: 'cover', 
    backgroundPosition: '50% 45%' 
  }

  return (
    <Grid className="App" container justifyContent="center" spacing={0} sx={appStyles}>
      <Grid container item xs={12} xl={10} direction="column" position="relative" top="42.5%" height="fit-content">
        <TagLine />
        {authIsReady && (
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="/weam">
            {/* <FadeMenu />z */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sub-request" element={<SubRequest />} />
              <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
              <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
              <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
        )}
      </Grid>
    </Grid>
  );
}

export default App;
