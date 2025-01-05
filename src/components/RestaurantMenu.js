import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    
    const [resInfo, setResInfo] = useState(null);

    const {id} = useParams();
    console.log(id);
    
    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch(MENU_API+id+"&catalog_qa=undefined&submitAction=ENTER");
        
        const json = await data.json();
        
        // console.log(json?.data);
        setResInfo(json.data);
        
    }

    if(resInfo === null) return <Shimmer /> 

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    
    // resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;
    //1,2,3
  

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
            {itemCards.map((item)=>(
                <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name} -   Rs.{item?.card?.info?.defaultPrice/100||item?.card?.info?.price/100}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;

