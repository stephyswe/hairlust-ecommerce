import { useEffect } from 'react'

export function useAddClassToBody() {
  useEffect(() => {
    document.body.classList.add('template-collection')
    document.body.id = 'root'
    return () => {
      document.body.classList.remove('template-collection')
      document.body.id = ''
    }
  }, [])
}
