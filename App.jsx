import { useEffect, useState } from 'react';
import './App.css';
import  Router  from './route/Router.jsx';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/movie/2020');
        
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }

        const result = await response.json();

        setData(result);
        
      } 
      catch (err) {
        setError(err.message);
      } 
      finally {
          setLoading(false); 
      }
    };

    fetchData();
  }, []);


  return (
   <Router
   data={data}
   error={error}
   loading={loading}
   />
  );
}

export default App;
