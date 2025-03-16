import {Routes,Route} from 'react-router-dom'
import Home from '../page/Home'
import Search from '../page/Search'
import Moviedetail from '../page/Moviedetail'


const Router = ({data,error,loading}) => {
  return (
    <Routes>
      <Route path='/' element={<Home data={data} error={error} loading={loading}/>}/>
      <Route path='/search' element={<Search data={data}/>}/>
      <Route path='/movieDetail/:id' element={<Moviedetail data={data}/>}/>
    </Routes>
  )
}

export default Router