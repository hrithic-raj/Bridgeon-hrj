import './css/App.css';
import Counter from './components/Counter';
import FetchDB from './components/FetchDB';
import 'bootstrap/dist/css/bootstrap.min.css';
import UseReducer from './components/UseReducer';
import ThemeContext from './components/ThemeContext';
import { useState } from 'react';
import Bgchangebtn from './components/Bgchangebtn';
import Adv_Fetch from './components/Adv_Fetch';
import LocalStorage from './components/LocalStorage';

function App() {
  const [bgColor,setBgColor]=useState('blur(10px)');
  return (
    <ThemeContext.Provider value={{bgColor,setBgColor}}>
      <div className="App">
      <div className='br' style={{backdropFilter:bgColor}}>
      <UseReducer/>
      </div>
      <div className="br" style={{backdropFilter:bgColor}}>
        <Counter/>
      </div>
      <div className="fetch br" style={{backdropFilter:bgColor}}>
      {/* <FetchDB/> */}
      <Adv_Fetch/>
      </div>
      <div className="br" style={{backdropFilter:bgColor}}>
        <Bgchangebtn/>
      </div>
      <div className="br" style={{backdropFilter:bgColor}}>
        <LocalStorage/>
      </div>
      <div className="br" style={{backdropFilter:bgColor}}></div>
      <div className="br" style={{backdropFilter:bgColor}}></div>
      <div className="br" style={{backdropFilter:bgColor}}></div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;