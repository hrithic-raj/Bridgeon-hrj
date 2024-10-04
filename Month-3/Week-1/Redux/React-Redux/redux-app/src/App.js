import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ColorBox from './components/ColorBox';


function App() {
  return (
    <div id='app' className="App" style={{display:'flex', flexDirection:'column', alignItems:'center', rowGap:'20px'}}>
      <Counter/>
      <ColorBox/>
    </div>
  );
}

export default App;
