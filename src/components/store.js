import { create } from 'zustand'

export const useTaskListStore = create((set) => ({
  tasksList: [{}],
  setTasksList: (newTasksList) => set((state) => ({ tasksList: newTasksList })),
  addTask: (newTask) =>
    set((state) => ({ tasksList: state.tasksList.push(newTask) })),
}))
