import { useEffect } from 'react';
import './App.css';

// @ts-ignore
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close();
  }

  return (
    <div>
      Hello world!
      <button>First</button>
      <button>Second</button>
      <button>Third</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
