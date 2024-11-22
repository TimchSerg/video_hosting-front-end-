import { PrimeReactProvider } from 'primereact/api';

import '/node_modules/primeflex/primeflex.css';
import 'primeflex/themes/primeone-dark.css';
import './App.css';
import VideoPage from './pages/video';

function App() {
  return (
    <PrimeReactProvider value={{locale: 'ru'}}>
      <div className="App">
        <VideoPage />
      </div>
    </PrimeReactProvider>
    
  );
}

export default App;
