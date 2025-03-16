import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Search = ({ data }) => {
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const filteredResults = data.filter((item) => 
      item.title.toLowerCase().includes(value.toLowerCase()) );
    setFilter(filteredResults); 
  }, [value, data]); 

  return (
    <div className='searchContainer'>

      <div className='inputcontainer'>
      <svg className='seatchImage' xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
       <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
       </svg>
      <input
        type="text"
        className='searchInput'
        placeholder='Search'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      </div>
     
      
      <div>
        {value === '' ? (
          <p className='text'>No search</p>
        ) : filter.length === 0 ? (
          <p className='text'>No results found</p>
        ) : (
          filter.map((item) => (
            <div className='cardContainer1'>
              <div className='cardContainer' key={item._id}>

              <img className='cardImage' src={item.thumbnail} alt="loading.." />

             <h2 className='cardTitle'>{item.title}</h2>

             <h3 className='cardYear'>{item.year}</h3>

             <p className='cardText'>{item.extract}</p>

            <Link to={`/movieDetail/${item._id}`}>
            <button className='cardButton'>View</button></Link>


           </div>
          </div>
             
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
