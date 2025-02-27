import { useState } from 'react'
import { InputField } from './stylized_components/stylizedComponents'
import { Button, Input } from 'antd'
import { useTaskListStore } from './store'

const TaskAdder = () => {
  const { task, tasksList, addNewTask } = useTaskListStore((state) => state)
  const [newTask, setNewTask] = useState('')
  const sendNewTask = () => {
    const postDate = new Date()
    console.log(tasksList)
    const taskId = tasksList[0].id++
    const task = [
      {
        id: taskId,
        attributes: {
          createdAt: postDate.toISOString(),
          description: newTask,
          publishedAt: postDate.toISOString(),
          status: 'active',
          isFavorite: false,
          title: 'Задача № ' + taskId,
          updatedAt: postDate.toISOString(),
        },
      },
    ]
    addNewTask(task)

    console.log(taskId)
    setNewTask('')
  }
  return (
    <InputField title="Добавить задачу">
      <Input
        placeholder="Some kind of task"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value)
        }}
      />
      <Button
        type="primary"
        size="large"
        onClick={() => {
          sendNewTask()
        }}
      >
        Add task
      </Button>
    </InputField>
  )
}

export default TaskAdder
