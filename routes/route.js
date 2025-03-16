import { getMovieList } from '../controll/movieList.js'
import express from 'express'

export const router = express.Router()

router.get('/2020',getMovieList)

