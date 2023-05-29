import React from 'react'

export default function Vans() {
    const [vanArray, setVanArray] = React.useState([])
    const [vanElements, setVanElements] = React.useState(vanArray)

    React.useEffect(() => {
        fetch('/api/vans')
        .then(response => response.json())
        .then(data => setVanArray(data.vans))
    }, [])

    React.useEffect(() => {
        setVanElements(vanArray.map(van => <li key={van.id}>{van.name}</li>))
    }, [vanArray])


    return (
        <div className="van-container">
            <h1>Explore our van options</h1>
            <ul>
            {vanElements}
            </ul>
        </div>
    )
}