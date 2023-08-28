import { useState, useEffect } from "react"
import transactions from "../fixtures/transactions.json"

const fixtureMap = {
  'transactions': transactions
}

const BASE_URL = ""

export function useFetch(url = "", useMockData = false) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (useMockData) {
          setData(fixtureMap[url])
        } else {
          const resp = await fetch(BASE_URL + url);
          const jsonData = await resp.json();
          setData(jsonData)
        }
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url, useMockData])

  return { data, error, isLoading}
}