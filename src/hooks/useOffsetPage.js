import { useEffect, useState } from "react"

/* CALCULATE THE CURRENT OFFSETS OF THE PAGE*/
const useOffsetPage = () => {
    const [offsetY, setOffsetY] = useState(0)
    const [offsetX, setOffsetX] = useState(0)

    useEffect(() => {
        const setOffset = () => {
            setOffsetX(window.pageXOffset)
            setOffsetY(window.pageYOffset)
        }
        window.onscroll = setOffset

        return () => {
            window.removeEventListener('scroll', setOffset)
        }
    })

    return { offsetX, offsetY }
}

export default useOffsetPage