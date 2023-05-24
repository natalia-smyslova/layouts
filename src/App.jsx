import Store from './components/Store';
import products from './data/products';
import './styles/App.css';


function App() {
  return <Store products={products} />
}

export default App;
