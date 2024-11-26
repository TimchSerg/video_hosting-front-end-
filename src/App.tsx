import { PrimeReactProvider } from 'primereact/api';

import '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/viva-dark/theme.css';
import './App.css';
import VideoPage from './pages/video';
import NorrComponent from 'components/norr_show';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { PrivateOutlet } from 'pages/PrivateOutlet';
import Login from 'features/auth/Login';

function App() {
  return (
    <PrimeReactProvider >
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateOutlet />}>
            <Route path="video" element={<VideoPage />} ></Route>
          </Route>
        </Routes>
      </HashRouter>
      
      <NorrComponent />
    </PrimeReactProvider>
    
  );
}

export default App;
