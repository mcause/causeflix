import { createContext } from "react"

export const API_KEY ='e0809a11474c5107a5638045e192696c'
export const GenreContext = createContext('genres')

export const fetchMoviesFromDatabase = (route) => {
    console.log(`ok api.themoviedb.org/3/${route}?api_key=${API_KEY}`)
   return fetch(`https:api.themoviedb.org/3/${route}?api_key=${API_KEY}`)
    .then(res => res.json())
}

export const fetchTvShowsFromDatabase = (route) => {
    console.log(`ok api.themoviedb.org/3/${route}?api_key=${API_KEY}`)
   return fetch(`https:api.themoviedb.org/3/${route}?api_key=${API_KEY}`)
    .then(res => res.json())
}