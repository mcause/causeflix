import { createContext } from "react"


export const API_KEY = process.env.REACT_APP_API_KEY;
export const GenreContext = createContext('genres')

export const fetchMoviesFromDatabase = (route, params = '') => {
    //rendering UI till it matches the URL
   return fetch(`https:api.themoviedb.org/3/${route}?api_key=${API_KEY}${params}`)
    .then(res => res.json())
}

// export const fetchTvShowsFromDatabase = (route) => {
//     console.log(`ok api.themoviedb.org/3/${route}?api_key=${API_KEY}`)
//    return fetch(`https:api.themoviedb.org/3/${route}?api_key=${API_KEY}`)
//     .then(res => res.json())
// }