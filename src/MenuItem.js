import { IMG_URL } from "./config";

const MenuItem = ({imageId,name,defaultPrice,price,description}) => {
    return (
        <div className="menu-item">
            <div className="item-desc">
                <h3>{name}</h3>
                <h3>Rs. {defaultPrice/100 || price/100}</h3>
                <h4>{description}</h4>
            </div>
            <img alt="Item pic" src={IMG_URL + imageId}/>

        </div>
    )
}

export default MenuItem;