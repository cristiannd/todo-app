import Swal from "sweetalert2"
import { v4 as uuidv4 } from "uuid"
import { useForm } from "../hooks/useForm"

const Formulario = ({ addTask }) => {

  const initialState = {
    name: "",
    description: "",
    state: "pending",
    priority: false
  }

  const [inputs, handleChange, reset] = useForm(initialState)

  const { name, description, state, priority } = inputs

  const handleSubmit = e => {
    e.preventDefault()

    if(!name.trim()) {
      e.target[0].focus()
      
      return Swal.fire({
        title: "Error!",
        text: "You must complete the task name",
        icon: "error"
      })
    }

    if(!description.trim()) {
      e.target[1].focus()
      
      return Swal.fire({
        title: "Error!",
        text: "You must complete the task description",
        icon: "error"
      })
    }

    Swal.fire({
      title: "success",
      text: "Your task added",
      icon: "success"
    })

    addTask({
      name,
      description,
      state: state === "pending" ? false : true,
      priority,
      id: uuidv4()
    })

    reset();
  }

  return (
    <>
      <h3>Formulario</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          name="name"
          placeholder="Task name"
          value={name}
          onChange={handleChange}
        />
        <textarea
          className="form-control mb-2"
          name="description"
          placeholder="Description"
          value={description}
          onChange={handleChange}
        />
        <select
          name="state"
          className="form-control mb-2"
          value={state}
          onChange={handleChange}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            name="priority"
            checked={priority}
            onChange={handleChange}
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckDefault">
            Priority
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Add
        </button>
      </form>
    </>
  )
}

export default Formulario