import { create } from 'zustand'

export const useTaskListStore = create((set) => ({
  tasksList: [{}],
  getTasksFromServer: async (url) => {
    let response = await fetch(url)
    if (response.ok) {
      let json = await response.json()
      console.log('Main reload')

      set((state) => {
        return (state.tasksList = json.data)
      })
    } else {
      alert('Ошибка HTTP: ' + response.status)
    }
  },

  addNewTask: (task) =>
    set((state) => ({ tasksList: [...state.tasksList, ...task] })),
  setTasksList: (newTasksList) => set((state) => ({ tasksList: newTasksList })),
  changeTaskStatus: (taskId, taskStatus) =>
    set((state) => {
      const found = state.tasksList.find((el) => el.id === taskId)
      console.log(found)
      found.attributes.status = taskStatus
      return state.tasksList
    }),
  filter: '',
  setFilter: (filter) => set((state) => ({ filter: filter })),
  // showFilteredTask: (filter) =>
  //   set((state) => ({
  //     tasksList: filter
  //       ? state.tasksList.filter((el) => el.attributes.status === filter)
  //       : state.tasksList,
  //   })),
}))
