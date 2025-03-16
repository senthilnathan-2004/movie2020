import React from 'react'
import './Component.css'
import { Link } from 'react-router-dom'

const Movielist = ({data}) => {
  return (
    <div className='cardContainer1'>
      {
        data.slice(0,15).map((item)=>
         
          <div className='cardContainer' key={item._id}>

            <img className='cardImage' src={item.thumbnail} alt="loading.." />

            <h2 className='cardTitle'>{item.title}</h2>

            <h3 className='cardYear'>{item.year}</h3>

            <p className='cardText'>{item.extract}</p>

            <Link to={`/movieDetail/${item._id}`}>
            <button className='cardButton'>View</button></Link>
            

          </div>
        )
      }


    </div>
  )
}

export default Movielist