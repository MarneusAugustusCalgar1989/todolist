import React from 'react'
import { useTaskListStore } from './store'

const ToDo = ({ attributes }) => {
  const { addTask, tasksList } = useTaskListStore((state) => state)
  const testClick = () => {
    addTask({ ...attributes })
    console.log(tasksList, ' from todo', attributes.id)
  }
  return (
    <div onClick={testClick}>
      {attributes.attributes.status === 'Не выполнена' ? (
        <div className="to_do_red">{attributes.attributes.title}</div>
      ) : (
        <div className="to_do_green">{attributes.attributes.title}</div>
      )}
    </div>
  )
}

export default ToDo
