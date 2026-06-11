import { useState } from "react"
// import React from 'react'


const useWeather = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchWeather = async (city: string) => {
    const URL_HERE = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}`
    setLoading(true)
    try {
      const response = await fetch(URL_HERE)
      const json = await response.json()

      if(!response.ok){
        throw new Error(json.error.message)
      }

      setData(json)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  
  }
  return { data, loading, error, fetchWeather }
  
}

export default useWeather
