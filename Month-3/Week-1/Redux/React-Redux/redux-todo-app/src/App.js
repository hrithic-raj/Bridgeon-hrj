import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './Features/Todos/TodoList';

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
