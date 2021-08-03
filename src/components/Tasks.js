import Task from "./Task"

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((singleTask) => (
        <Task key={singleTask.id} singleTask={singleTask} onDelete={onDelete} />
      ))}
    </>
  )
}

export default Tasks
