import { PrimeReactProvider } from 'primereact/api';

import 'video-react/dist/video-react.css'
import '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/viva-dark/theme.css';
import './App.css';


import VideoPage from './pages/video/video';
import NorrComponent from 'components/norr_show';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { PrivateOutlet } from 'pages/PrivateOutlet';
import Login from 'features/auth/Login';
import VideoIdPage from 'pages/video/videoId';
import VideoNamePage from 'pages/video/videoName';

function App() {
  return (
    <PrimeReactProvider >
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateOutlet />}>
            <Route index path="video" element={<VideoPage />} ></Route>
          </Route>

          <Route path="embed/id/:id" element={<VideoIdPage />} ></Route>
          <Route path="embed/:filename" element={<VideoNamePage />} ></Route>
        </Routes>
      </HashRouter>
      
      <NorrComponent />
    </PrimeReactProvider>
    
  );
}

export default App;
