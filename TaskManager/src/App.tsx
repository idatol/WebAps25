import './App.css'
import TaskCard from './components/TaskCard'

const task = {
  id: '123',
  title: 'My Title Works',
  description: 'My Description',
  dueDate: new Date(),
}

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskCard task={task} />
    </div>
  )
}

export default App
