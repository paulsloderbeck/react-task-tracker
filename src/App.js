import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'


const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors appointment",
        day: "Feb 5th at 2:30 pm",
        reminder: true,
    },
    {
        id: 2,
        text: "Soccer practice",
        day: "September 8th at 5:00 PM",
        reminder: true
    },
    {
        id: 3,
        text: "Clean pool",
        day: "November 11th at 11AM",
        reminder: true
    }
])

//Delete Task

const deleteTask = function(id) {  
   setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder



  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask}/> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
