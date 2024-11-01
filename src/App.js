import './App.css';
import PostPage from './pages/postPage/PostPage';
import AddTask from './components/AddTask';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="app">
      {/* <PostPage/> */}
      <AddTask/>
      {/* <TaskFilter/> */}
      <TaskList/>

    </div>
  )
}

export default App;
