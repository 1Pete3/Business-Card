import ReactDOM from 'react-dom/client';
import './index.css';
import BusinessCard from './components/BusinessCard';
const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  return (
    <div>
      <BusinessCard />
    </div>
  );
}
root.render(<App />);
