import React from 'react'
import styled from 'styled-components'

const TestComponent = () => {
  const TestButton = styled.button`
    width: 100px;
    height: 100%;
    border: 1px solid black;
    border-radius: 2rem;
    cursor: pointer;
    transition: transform 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  `
  return <TestButton>!!!</TestButton>
}

export default TestComponent
