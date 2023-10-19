import './App.css';
import Navbar from './Components/navbar';
import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import store from './utils/store';
import Container from './Components/container';

function App() {
  const [theme,settheme]=useState(true)

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
  }, [theme])

  
  return (
    <Provider store={store} >
    <Navbar mode={[theme,settheme]}/>
    <Container/>
   
    </Provider>
  );
}



export default App;
