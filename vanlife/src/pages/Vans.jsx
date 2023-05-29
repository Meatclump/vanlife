import React from 'react'
import Van from '../components/VanThumbnail'

export default function Vans() {
    const [vanArray, setVanArray] = React.useState([])
    const [vanElements, setVanElements] = React.useState(vanArray)

    React.useEffect(() => {
        fetch('/api/vans')
        .then(response => response.json())
        .then(data => setVanArray(data.vans))
    }, [])

    React.useEffect(() => {
        setVanElements(vanArray.map(van => <Van key={van.id} vanData={van} />))
    }, [vanArray])


    return (
        <main className="van-container">
            <h1>Explore our van options</h1>
            <div className='van-grid'>
                {vanElements}
            </div>
        </main>
    )
}