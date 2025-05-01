import './App.css';
import TodoinputForm from './component/todoinputForm';
import TodoListElement from './component/todolistElement';

function App() {
  return (
    <div className='flex flex-col'>
      <h4 className='text-center text-black'>My Todo App</h4>
      <TodoinputForm />
      <TodoListElement />
    </div>
  );
}

export default App;
