import logo from './logo.svg';
import './App.css';
import Business from './Business';
import BusinessList from './BusinessList';

function App() {
  const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  };
  return (
    <div className="App">
      <header className="App-header">
        <Business business={business} /> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Codecademy!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;