import { useState } from "react"
// import React from 'react'


const useMovieSearch = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchMovie = async (movie: string,type:string) => {
    const URL_HERE = `http://www.omdbapi.com/?s=${movie}&apikey=${import.meta.env.VITE_API_KEY}${type ? `&type=${type}` : ""}`
    setLoading(true)
    try {
      const response = await fetch(URL_HERE)
      const json = await response.json()

      if(!response.ok){
        throw new Error(json.error.message)
      }
      if(json.Response === "False"){  // ← yahan add karo
        throw new Error(json.Error)
    }
setData(json)
    } catch (err) {
      setError((err as Error).message);
      setData(null);
    } finally {
      setLoading(false)
    }
  
  }
  return { data, loading, error, fetchMovie }
  
}

export default useMovieSearch;
