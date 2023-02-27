import { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import Products from './components/Products';
import store from './redux/store';

function App() {
  const [render, setRender] = useState('products');
  return (
    <Provider store={store}>
      <div>
        <Navbar setRender={setRender} />
        {
          render === 'products'
            ?
            (<Products />)
            :
            (<CartContainer />)
        }
      </div>
    </Provider>
  );
}

export default App;
