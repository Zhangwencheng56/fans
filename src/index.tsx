import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/router';
import './asset/styles/iconfont.css'
import './asset/styles/public.scss'

function App() {
  return (
      <div className="App">
          <AppRouter />
      </div>
  );
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);