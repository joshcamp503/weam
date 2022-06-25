// STYLESHEETS
import './App.css';
// COMPONENTS
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import SubRequest from './pages/SubRequest/SubRequest';
import FadeMenu from './components/FadeMenu';
import Profile from './pages/Profile/Profile';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// HOOKS
import { useAuthContext } from './hooks/auth/useAuthContext';
import { useTheme } from './hooks/useTheme';
// MUI
import Grid from '@mui/material/Grid'
import { ThemeProvider } from '@mui/material';

function App() {
  const { user, authIsReady } = useAuthContext()
  const { theme } = useTheme()
  
  return (
    <Grid className="App" container justifyContent='center' >
      <Grid item xs={12} xl={10} >
        {authIsReady && (
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <FadeMenu />
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
