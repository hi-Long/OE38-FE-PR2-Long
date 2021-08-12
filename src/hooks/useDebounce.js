import { useEffect } from "react"

const useDebounce = (value, callback, delay) => {
    useEffect(() => {
        const handler = setTimeout(() => {
            callback()
        }, delay)
        return () => {
            clearTimeout(handler)
        }
    }, [value, callback, delay])
}

export default useDebounce
