"use client"
import { useEffect, useState } from "react"
import PropertySkelton from "./propertySkelton"

const PropertiesLoadingSkelton = ({ children }) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])

    return (
        loading ?
            Array.from(
                { length: 6 },
                (_, index) => <PropertySkelton key={index} />
            )
            :
            children
    )
}

export default PropertiesLoadingSkelton