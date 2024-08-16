import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resInfo} = props;
    const {
        cloudinaryImageId, 
        name, 
        cuisines, 
        avgRatingString, 
        costForTwo, 
        sla
    } = resInfo?.info;
    return (
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0",
        }}>
            <img alt="res-logo" className="res-logo" src={CDN_URL + resInfo.info.cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
};

export default RestaurantCard;