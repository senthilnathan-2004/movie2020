import React from 'react'
import './Page.css'
import Header from '../component/Header'
import Movielist from '../component/Movielist'

const Home = ({data,error,loading}) => {
  return (
    <div className='homeContainer'>
       <Header/>
       {error ? <h1>{error}</h1>
       : loading ? <h1>Loading...</h1>:  <Movielist data={data}/>}
       
     

    </div>
  )
}

export default Home