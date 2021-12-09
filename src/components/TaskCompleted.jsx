const TaskCompleted = ({ task }) => {

  const { name, description } = task

  return (
      <li className="list-group-item">
        <p className="mb-1">{ name }</p>
        <small>{ description }</small>
      </li>
  )
}

export default TaskCompleted
