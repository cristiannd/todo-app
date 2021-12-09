const Task = ({ task, deleteTask, editTask }) => {

  const { name, description, state, priority, id } = task

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{ name } | { state === false ? "pending" : "completed" }</div>
        <p className="mb-2">{ description }</p>
        <div>
          <button className="btn btn-sm btn-danger me-2" onClick={() => deleteTask(id)}>Delete</button>
          <button className="btn btn-sm btn-warning" onClick={() => editTask(id)}>Completed</button>
        </div>
      </div>
      <span className="badge bg-primary rounded-pill">{ priority === true && "Priority" }</span>
    </li>
  )
}

export default Task
