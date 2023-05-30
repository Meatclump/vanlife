import { Link } from 'react-router-dom'

export default function Van(props) {
    const {name, imageUrl, price, type, id} = props.vanData
    let vanTypeClasses = 'van-type';

    if (type) {
        vanTypeClasses += ' van-type--' + type
    }
    
    return (
        <div className="van-thumbnails">
            <Link to={id}>
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
            </Link>
        </div>
    )
}