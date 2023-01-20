import React from 'react'
import { useContext } from 'react'
import RobotContext from '../context/RobotContext'

function SearchBar() {
  const {onSearchChange} = useContext(RobotContext)
  return (
    <div className='tc' >
      <input type="text" className='br3 pa2 ' placeholder='search for robot' onChange={onSearchChange} shadow-2/>
    </div>
  )
}

export default SearchBar
