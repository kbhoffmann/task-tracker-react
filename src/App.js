import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTaskForm from './components/AddTaskForm'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
      {
        id: 1,
        text: 'Doctor Appointment',
        day: 'February 7th at 01:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Lunch with Kelsey',
        day: 'February 8th at 11:30am',
        reminder: true,
      },
      {
        id: 3,
        text: 'Go to Pet Store',
        day: 'February 9th at 10:00am',
        reminder: false,
      },
      {
        id: 4,
        text: 'Get Massage',
        day: 'February 11th at 04:30pm',
        reminder: true,
      }
    ]
  )

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
      task.id === id ? { ...task, reminder:
      !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
     <Header
       onAdd={() => setShowAddTask
       (!showAddTask)}
       showAdd={showAddTask}
     />
      {showAddTask && <AddTaskForm onAdd={addTask}
      />}
     {tasks.length > 0 ? (
       <Tasks tasks={tasks}
      onDelete={deleteTask} onToggle={toggleReminder}/>
    ) : (
        'Nothing to do!  Relax or do something fun!')}
    </div>
  );
}

export default App;
