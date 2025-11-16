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
if (!rootElement) {
  throw new Error(
    'Failed to find the root element. Make sure there is a <div id="root"></div> in your HTML.'
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
