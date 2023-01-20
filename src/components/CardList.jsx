// import React from 'react'
import { useContext } from 'react'
import RobotContext from '../context/RobotContext'
import Card from './Card'

function CardList() {
    const {robots} = useContext(RobotContext)
  return (
    <>
      
        {
            (robots.length>0)?robots.map((item) => (
                <Card key={item.id} item={item} />
            )):<h3 className='f2 tc white'>No Items matched</h3>
      }
      
    </>
  )
}

export default CardList
