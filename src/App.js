import logo from './logo.svg';
import './App.css';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';

function App(){
  // create a businesses object to pass the BusinessList component
  // can just duplicate the business component information here 
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
  // create an array of businesses to pass the BusinessList component
  const businesses = [
    business,
    business,
    business,
    business,
    business,
    business
  ];
  // return the BusinessList component with the businesses array
  return (
    <div className="App">
      <header className="App-header">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList businesses={businesses} />
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