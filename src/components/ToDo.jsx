import React from 'react'
import { Card, Space } from 'antd'
import { Button } from 'antd'
import { ToDoEl, ButtonWrapper } from './stylized_components/stylizedComponents'

const ToDo = ({ attributes }) => {
  return (
    <ToDoEl>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Card title={attributes.attributes.title} size="small">
          <p>{attributes.attributes.description}</p>
        </Card>
        <ButtonWrapper>
          <Button type="default">Add to Favorites</Button>
          <Button type="default">Done</Button>
        </ButtonWrapper>
      </Space>
    </ToDoEl>
  )
}

export default ToDo
