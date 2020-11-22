import React, {useState} from 'react'
import './index.css';

export default function SearchMovies(){

  const [query, setQuery] = useState('')

  const searchMovies = async (e) => {
    e.preventDefault()

    const url = `https://api.themoviedb.org/3/movie/550?api_key=c7eed4912b889e36c9ff91ca9fe5b3c3&language=en-US&query=${query}&page=1&include_adult=false`

    try  {
      const res = await fetch(url)
      const data = res.json()
      console.log('My data: ', data)
    }catch(err){
      console.log('Lovro Error: ', err)
    }
  }

  return (
    <form  className="form" onSubmit={searchMovies} >
        <label  className="label" htmlFor="query" >Movie name</label>
        <input className="input" type="text" name="query" 
          placeholder="i.e. Jurassic Park" 
          value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit" >Submit</button>
    </form>
  )
}