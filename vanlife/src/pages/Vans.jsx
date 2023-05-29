import React from 'react'
import Van from '../components/VanThumbnail'

export default function Vans() {
    const [vanArray, setVanArray] = React.useState([])
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

    // Set the van elements when our van array updates
    // Set the van types when the van array updates
    React.useEffect(() => {
        setVanElements(vanArray.map(van => <Van key={van.id} vanData={van} />))
        let uniqueTypes = []
        vanArray.forEach(item => {
            if (!uniqueTypes.includes(item.type)) {
                uniqueTypes.push(item.type)
            }
        })
        setTypes(uniqueTypes)
    }, [vanArray, selectedType])

    // Update the van elements array when a van type is selected
    React.useEffect(() => {
        setVanElements(vanArray.map(van => {
            if (van.type === selectedType && selectedType !== '') {
                return <Van key={van.id} vanData={van} />
            } else if (selectedType === '') {
                return <Van key={van.id} vanData={van} />
            }
        }))
    }, [selectedType])

    // Set the van type buttons when the available van types update
    React.useEffect(() => {
        setTypeSelectors(types.map(type => <button key={type} value={type} onClick={changeType}>{type}</button>))
    }, [types])

    // Change the selected type of van for our display filters
    function changeType(event) {
        selectedType === event.target.value ? setSelectedType('') : setSelectedType(event.target.value)
    }

    return (
        <main className="van-container">
            <h1>Explore our van options</h1>
            {typeSelectors}
            <div className='van-grid'>
                {vanElements}
            </div>
        </main>
    )
}
