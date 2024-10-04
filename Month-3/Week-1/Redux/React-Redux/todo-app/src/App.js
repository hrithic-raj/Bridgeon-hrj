import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1 style={{fontSize:'20px'}}>Todo List</h1>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
