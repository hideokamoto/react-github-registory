import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Thing } from '../src/index.tsx';

const App = () => {
  return (
    <div>
      <Thing />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
