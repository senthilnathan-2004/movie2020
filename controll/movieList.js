import { Movie } from '../model/model.js';
export const getMovieList = async (req, res) => {
   const data = await Movie.find()  
   res.status(200).json(data) 
}