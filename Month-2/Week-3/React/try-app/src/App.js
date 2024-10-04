
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Input from './Input';
import NotFound from './NotFound';
import Nav from './Nav';
import UseReducer from './UseReducer';
import LocalStorage from './LocalStorage';
import JsonServer from './JsonServer';
  
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/input' element={<Input/>}/>
        <Route path='/reducer' element={<UseReducer/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/ls' element={<LocalStorage/>}/>
        <Route path='/js' element={<JsonServer/>}/>
      </Routes>
    </div>
  );
}

export default App;
