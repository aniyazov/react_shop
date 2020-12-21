import './App.css';
import Header from './Header/Header'
import HomePage from './HomePage/HomePage';
import data from './data'


function App( ) {
  return (
    <div className="App">
      <Header/>
      <HomePage intProd = {data.products}/>
    </div>
  );
}

export default App;
