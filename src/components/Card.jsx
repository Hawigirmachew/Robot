import React from 'react'

function Card({item}) {
  return (
    <div>
    <div className='tc bg-light-blue fl-l pa3 ma4 grow bw2 shadow-2 card'>
      <img src={`https://robohash.org/${item.username}?set=set4`} alt='random robot' />
      <h2>{item.name}</h2>
      <p>{item.email}</p>
    </div>
  </div>
  )
}

export default Card
