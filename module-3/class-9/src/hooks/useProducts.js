import { useEffect, useState } from 'react'

const PRODUCTS_URL = 'https://fakestoreapi.com/products/'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')
  const [requestVersion, setRequestVersion] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    const loadProducts = async () => {
      setStatus('loading')
      setError('')

      try {
        const response = await fetch(PRODUCTS_URL, { signal: controller.signal })

        if (!response.ok) {
          throw new Error('We could not load the catalog. Please try again.')
        }

        const data = await response.json()

        if (!Array.isArray(data)) {
          throw new Error('The catalog response was not valid. Please try again.')
        }

        if (!controller.signal.aborted) {
          setProducts(data)
          setStatus('success')
        }
      } catch (requestError) {
        if (requestError.name !== 'AbortError' && !controller.signal.aborted) {
          setError(requestError.message)
          setStatus('error')
        }
      }
    }

    loadProducts()

    return () => controller.abort()
  }, [requestVersion])

  const retry = () => setRequestVersion((currentVersion) => currentVersion + 1)

  return { products, status, error, retry }
}

export default useProducts