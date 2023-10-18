import './App.css';
import Navbar from './Components/navbar';
import { Provider } from 'react-redux';
import store from './utils/store';
function App() {
  return (
    <Provider store={store}>
    <Navbar/>
    </Provider>
  );
}

export default App;
