import { useEffect } from 'react'
import ToDo from './components/ToDo'
import { useTaskListStore } from './components/store'
function App() {
  const { tasksList, setTasksList } = useTaskListStore((state) => state)

  useEffect(() => {
    const getDataFromServer = async () => {
      const taskBase = 'https://cms.laurence.host/api/tasks'
      let response = await fetch(taskBase)

      if (response.ok) {
        let json = await response.json()
        console.log('Main reload')

        return setTasksList(json.data)
      } else {
        alert('Ошибка HTTP: ' + response.status)
      }
    }
    getDataFromServer()
  }, [])

  return (
    <div className="App">
      <h1>TODOLIST</h1>

      {tasksList.length && tasksList[0].attributes ? (
        tasksList.map((el) => {
          return <ToDo key={el.id} attributes={el} />
        })
      ) : (
        <p>Nothing to show</p>
      )}
    </div>
  )
}

export default App
