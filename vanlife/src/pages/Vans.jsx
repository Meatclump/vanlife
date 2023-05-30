import React from 'react'
import Van from '../components/VanThumbnail'

export default function Vans() {
    const [vanArray, setVanArray] = React.useState(null)
    const [vanElements, setVanElements] = React.useState(vanArray)
    const [types, setTypes] = React.useState([])
    const [typeSelectors, setTypeSelectors] = React.useState('')
    const [selectedType, setSelectedType] = React.useState('')

    // Get the van data from the server
    React.useEffect(() => {
        fetch('/api/vans')
        .then(response => response.json())
        .then(data => setVanArray(data.vans))
    }, [])

    // Set the vanElements when our van array updates
    // Set the types when the van array updates
    React.useEffect(() => {
        if (vanArray) {
            setVanElements(vanArray.map(van => <Van key={van.id} vanData={van} />))
            let uniqueTypes = []
            vanArray.forEach(item => {
                if (!uniqueTypes.includes(item.type)) {
                    uniqueTypes.push(item.type)
                }
            })
            setTypes(uniqueTypes)
        }
    }, [vanArray, selectedType])

    // Update the vanElements when a van type is selected
    React.useEffect(() => {
        if (vanArray) {
            setVanElements(vanArray.map(van => {
                if (van.type === selectedType && selectedType !== '') {
                    return <Van key={van.id} vanData={van} />
                } else if (selectedType === '') {
                    return <Van key={van.id} vanData={van} />
                }
            }))
        }
    }, [selectedType])

    // Set the available typeSelectors when the van types array updates
    // If the button is the selectedType, set highlighting styles
    React.useEffect(() => {
        setTypeSelectors(types.map(type => {
            let buttonClasses = 'van-type-selector'
            if (type === selectedType) {
                buttonClasses += ' selected-van-type'
            }
            return <button className={buttonClasses} key={type} value={type} onClick={changeType}>{type}</button>
        }))
    }, [types, selectedType])

    // Change the selectedType of van for our display filters
    function changeType(event) {
        selectedType === event.target.value ? setSelectedType('') : setSelectedType(event.target.value)
    }

    return (
        <main className="van-container">
            { vanArray ? <>
                <h1>Explore our van options</h1>
                <p className='van-selector-description'>
                    Click to select a filter, or click again to de-select it and show all.
                </p>
                <div className='van-type-selector-container'>
                    {typeSelectors}
                </div>
                <div className='van-grid'>
                    {vanElements}
                </div>
            </> : <h2>Loading...</h2>}
        </main>
    )
}
