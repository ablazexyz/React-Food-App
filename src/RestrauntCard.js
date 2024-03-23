import { Link } from "react-router-dom";
import { IMG_URL } from "./config";

const RestrauntCard = (restaurant) => {
    const { id, name, avgRating, areaName, cloudinaryImageId } = restaurant;
    return (
        <Link to={"/restaurant/" + id} className="card-link">
            <div className="card">
                <img
                    src={IMG_URL + cloudinaryImageId}
                    alt="restrauntImg"
                />
                <h2>{name}</h2>
                <h3>{avgRating} stars</h3>
                <h3>{areaName}</h3>
            </div>
        </Link>
    )
}

export default RestrauntCard;