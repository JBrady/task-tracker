import Task from "./Task"

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((singleTask) => (
        <Task key={singleTask.id} singleTask={singleTask} />
      ))}
    </>
  )
}

export default Tasks
