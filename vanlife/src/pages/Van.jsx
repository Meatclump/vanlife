import React from 'react'
import { Link } from 'react-router-dom'

export default function Van() {
    const [van, setVan] = React.useState([])
    const [vanTypeClassName, setVanTypeClassName] = React.useState('')


    // Get the van data from the server
    React.useEffect(() => {
        fetch('/api/vans')
        .then(response => response.json())
        .then(data => setVan(data.vans[0]))
    }, [])

    // Set the class name styles dynamically
    React.useEffect(() => {
        let newClassName = 'van-type van-type--' + van.type
        setVanTypeClassName(newClassName)
    }, [van])


    return (
        <div className="van-details--container">
            <Link className='van-details--back-button' to='/vans'>&larr; <span>Back to all vans</span></Link>
            <img alt={van.name} className='van-details--image' src={van.imageUrl} />
            <span className={vanTypeClassName}>{van.type}</span>
            <h1 className='van-details--name'>Modest Explorer</h1>
            <p className="van-details--price"><strong>${van.price}</strong>/day</p>
            <p className="van-details--description">{van.description}</p>
            <button className='van-details--button'>Rent this van</button>
        </div>
    )
}