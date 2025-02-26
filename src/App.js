import { useEffect } from 'react'
import ToDo from './components/ToDo'
import { useTaskListStore } from './components/store'
import {
  AppEl,
  TodoListHeader,
} from './components/stylized_components/stylizedComponents'
import SorterFilter from './components/SorterFilter'
import TaskAdder from './components/TaskAdder'
import { Divider } from 'antd'
function App() {
  const { tasksList, getTasksFromServer } = useTaskListStore((state) => state)
  const dataUrl = 'https://cms.laurence.host/api/tasks'

  useEffect(() => {
    getTasksFromServer(dataUrl)
  }, [])

  return (
    <AppEl>
      <TodoListHeader>TODOLIST</TodoListHeader>
      <SorterFilter />
      <TaskAdder />
      <Divider>
        <TodoListHeader>Tasks list</TodoListHeader>
      </Divider>
      {tasksList.length && tasksList[0].attributes ? (
        tasksList.map((el) => {
          return <ToDo key={el.id} attributes={el} />
        })
      ) : (
        <p>Nothing to show</p>
      )}
    </AppEl>
  )
}

export default App
