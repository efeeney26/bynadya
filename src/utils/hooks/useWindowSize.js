import { useState, useEffect, useCallback } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState([0, 0])
  const updateSize = useCallback(() => {
    setWindowSize([window.innerWidth, window.innerHeight])
  }, [setWindowSize])

  useEffect(() => {
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [updateSize])
  return windowSize
}
