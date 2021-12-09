import { useEffect, useState } from "react"
import Formulario from "./Formulario"
import Task from "./Task"
import TaskCompleted from "./TaskCompleted"

const TodoList = () => {

  const [listTask, setListTask] = useState([])

  useEffect(() => {
    if(localStorage.getItem("listTask")) {
      setListTask(JSON.parse(localStorage.getItem("listTask")))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("listTask", JSON.stringify(listTask))
  }, [listTask])

  const addTask = task => {
    setListTask(old => ([
      ...old,
      task
    ]))
  }

  const deleteTask = id => {
    setListTask(old => old.filter(e => e.id !== id))
  }

  const editTask = id => {
    const tasksEdited = listTask.map(e => (
      e.id === id ? {...e, state: !e.state} : e
    ))
    
    setListTask(tasksEdited)
  }

  return (
    <>
      <Formulario addTask={addTask} />
      <h3 className="mt-3">Pending tasks</h3>
      <ol className="list-group list-group-numbered">
        {
          listTask.map(e => 
            e.priority === true & e.state === false ? 
              <Task key={e.id} task={e} deleteTask={deleteTask} editTask={editTask} />
              : ""
          )
        }
        {
          listTask.map(e => (
            e.priority === false & e.state === false ?
              <Task key={e.id} task={e} deleteTask={deleteTask} editTask={editTask} />
              : ""
          ))
        }
      </ol>

      <h3 className="mt-4">Completed tasks</h3>
      <ul className="list-group list-group-flush">
        {
          listTask.map(e => (
            e.state === true &&
              <TaskCompleted task={e} key={e.id} />
          ))
        }
      </ul>
    </>
  )
}

export default TodoList