export default function Van(props) {
    const {name, imageUrl, price, type} = props.vanData
    let vanTypeClasses = 'van-type';
    
    if (type === 'simple') {
        vanTypeClasses += ' van-type--simple'
    } else if (type === 'rugged') {
        vanTypeClasses += ' van-type--rugged'
    } else if (type === 'luxury') {
        vanTypeClasses += ' van-type--luxury'
    }
    
    return (
        <div className="van">
            <div className="van-image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="van-details">
                <div className="van-details-left">
                    <h3 className="van-name">{name}</h3>
                    <span
                        className={vanTypeClasses}
                    >
                        {type}
                    </span>
                </div>
                <div className="van-details-right">
                    <span className="van-price">${price}</span>
                    <span className="van-price-suffix">/day</span>
                </div>
            </div>
        </div>
    )
}