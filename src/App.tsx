import { PrimeReactProvider } from 'primereact/api';

import '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/viva-dark/theme.css';
import './App.css';
import VideoPage from './pages/video';
import NorrComponent from 'components/norr_show';

function App() {
  return (
    <PrimeReactProvider >
      <div className="App">
        <VideoPage />
      </div>
      <NorrComponent />
    </PrimeReactProvider>
    
  );
}

export default App;
