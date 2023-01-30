import { useState } from 'react'
import './App.css';
import MainPage from './pages/mainPage'
import WelcomePage from './pages/welcomePage';

function App() {

  const [ inside, setInside ] = useState(false)

  return (
    inside ? <MainPage nav={setInside} /> : <WelcomePage nav={setInside} />
  );
}

export default App;
