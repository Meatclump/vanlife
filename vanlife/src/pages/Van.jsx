import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Van() {
    const [van, setVan] = React.useState(null)
    const [vanTypeClassName, setVanTypeClassName] = React.useState('')
    const params = useParams()


    // Get the van data from the server
    React.useEffect(() => {
        fetch('/api/vans')
        .then(response => response.json())
        .then(data => setVan(data.vans[params.id]))
    }, [params.id])

    // Set the class name styles dynamically
    React.useEffect(() => {
        if (van) {
            const newClassName = 'van-type van-type--' + van.type
            setVanTypeClassName(newClassName)
        }
    }, [van])


    return (
        <div className="van-details--container">
            { van ? (
                <>
                    <Link className='van-details--back-button' to='/vans'>&larr; <span>Back to all vans</span></Link>
                    <img alt={van.name} className='van-details--image' src={van.imageUrl} />
                    <span className={vanTypeClassName}>{van.type}</span>
                    <h1 className='van-details--name'>Modest Explorer</h1>
                    <p className="van-details--price"><strong>${van.price}</strong>/day</p>
                    <p className="van-details--description">{van.description}</p>
                    <button className='van-details--button'>Rent this van</button>
                </>
            ) : <h2>Loading...</h2>}
        </div>
    )
}