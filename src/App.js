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
  const { tasksList, getTasksFromServer, filter } = useTaskListStore(
    (state) => state
  )
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
      {!filter &&
        tasksList.map((el) => {
          if (el.attributes) {
            return <ToDo key={el.id} el={el} />
          }
        })}

      {filter &&
        tasksList.map((el) => {
          if (el.attributes.status === filter) {
            return <ToDo key={el.id} el={el} />
          }
        })}
      {tasksList.length === 0 && <TodoListHeader>Loading</TodoListHeader>}
    </AppEl>
  )
}

export default App
