import React from 'react'
import { useParams } from 'react-router-dom'

const Moviedetail = ({data}) => {
  const {id} = useParams()
  const filterData = data.filter((item) => item._id == id)
  return (
    <div className='detailContainer'>

      <h2 className='detailTitle'>{filterData[0].title}</h2>
      <h3 className='detailYear'>{filterData[0].year}</h3>
      <div className='imageContainer'>
      <img className='detailImage'
       src={filterData[0].thumbnail} alt="Loading..." />
      </div>
    
      <div className='detailContainer2'>
      <table className='detailActors'>
        <h3 className='color'>Actors :</h3>
        {filterData[0].cast.map((item,index)=>(
          <ul>
          <tr key={index}>
            <td><li>{item}</li></td>
          </tr>
          </ul>
        ))}
      </table>

      <table className='detailGenres' >
        <h3 className='color'>Genres :</h3>
        {filterData[0].genres.map((item,index)=>(
         <ul>
         <tr key={index}>
           <td><li>{item}</li></td>
         </tr>
         </ul>
        ))}
      </table>
      </div>
      <br />
      <h3 className='color'>Discription :</h3>
     <p className='detailText'>{filterData[0].extract}</p>
    </div>
  )
}

export default Moviedetail