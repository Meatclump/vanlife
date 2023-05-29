export default function Van(props) {
    const {name} = props.vanData
    return (
        <div className="van">
            <h3>{name}</h3>
        </div>
    )
}