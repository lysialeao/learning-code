import React from 'react'
import { tasks } from '../../views/mock/tasks'

const Map = () => {

  return (
    <>
        <p>array.prototype.map()</p>
        {tasks.map((element, index) => <p key={index}>{index+1} | {element.name}</p>)}
    </>
  )
}

export default Map