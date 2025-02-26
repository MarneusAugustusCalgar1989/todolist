import { InputField } from './stylized_components/stylizedComponents'
import { Button, Input } from 'antd'

const TaskAdder = () => {
  return (
    <InputField title="Добавить задачу">
      <Input placeholder="Some kind of task" />
      <Button type="primary" size="large">
        Add task
      </Button>
    </InputField>
  )
}

export default TaskAdder
