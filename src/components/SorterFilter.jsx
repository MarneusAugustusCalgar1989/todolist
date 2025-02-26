import React from 'react'
import { SorterFilterStyled } from './stylized_components/stylizedComponents'
import { Button } from 'antd'
const SorterFilter = () => {
  return (
    <SorterFilterStyled>
      <Button type="default">All</Button>
      <Button type="default">Done</Button>
      <Button type="default">Undone</Button>
      <Button type="default">Favorites</Button>
    </SorterFilterStyled>
  )
}

export default SorterFilter
