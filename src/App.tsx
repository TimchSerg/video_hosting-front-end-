import { PrimeReactProvider } from 'primereact/api';

import '/node_modules/primeflex/primeflex.css';
import 'primereact/resources/themes/viva-dark/theme.css';
import './App.css';
import VideoPage from './pages/video';

function App() {
  return (
    <PrimeReactProvider >
      <div className="App">
        <VideoPage />
      </div>
    </PrimeReactProvider>
    
  );
}

export default App;
