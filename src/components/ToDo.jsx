import React, { useState } from 'react'
import { Card, Space } from 'antd'
import { Button } from 'antd'
import { ToDoEl, ButtonWrapper } from './stylized_components/stylizedComponents'
import { useTaskListStore } from './store'

const ToDo = ({ el }) => {
  const { status, title, description } = el.attributes
  const id = el.id
  const [doneTask, setDoneTask] = useState(false)
  const [favorite, setFavorite] = useState(false)
  const [taskStatus, setTaskStatus] = useState('Не выполнена')

  const { tasksList, changeTaskStatus } = useTaskListStore((state) => state)
  const toggleTaskStatus = () => {
    setFavorite(false)
    changeTaskStatus(id, !doneTask ? 'Выполнена' : 'Не выполнена')
  }
  const toggleFavorites = () => {
    changeTaskStatus(
      id,
      !favorite ? 'Избранное' : doneTask ? 'Выполнена' : 'Не выполнена'
    )
    setFavorite(!favorite)
  }

  return (
    <ToDoEl>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Card
          title={title}
          size="small"
          style={
            status === 'Избранное'
              ? { background: 'rgba(255,0,0,0.1)' }
              : status === 'Выполнена'
              ? { background: 'rgba(0,255,0,0.1)' }
              : { background: 'white' }
          }
        >
          <p>{description}</p>
        </Card>
        <ButtonWrapper>
          {favorite ? (
            <Button type="default" onClick={toggleFavorites}>
              Remove from Favorites
            </Button>
          ) : (
            <Button type="default" onClick={toggleFavorites}>
              Add to Favorites
            </Button>
          )}

          {doneTask ? (
            <Button
              type="default"
              onClick={() => {
                setDoneTask(!doneTask)
                toggleTaskStatus()
              }}
            >
              Finished
            </Button>
          ) : (
            <Button
              type="default"
              onClick={() => {
                setDoneTask(!doneTask)
                toggleTaskStatus()
              }}
            >
              Done
            </Button>
          )}
        </ButtonWrapper>
      </Space>
    </ToDoEl>
  )
}

export default ToDo
