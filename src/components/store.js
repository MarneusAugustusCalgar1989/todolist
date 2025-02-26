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

  setTasksList: (newTasksList) => set((state) => ({ tasksList: newTasksList })),
}))
