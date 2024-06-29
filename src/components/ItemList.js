import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList =({ items , dummy }) => {

  const dispatch = useDispatch();

  const handleAdditem =(item) => {
    // dispatch and action
    dispatch(addItem(item));

    console.log(item);  

  };
    
   return (
    <div>
        {items.map((item) => (
            <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                <div className="w-9/12">                
                <div className="py-4">
        <span className="py-2 font-semibold">{item.card.info.name}</span>

    <span className="p-2 font-semibold">  - ₹ {item.card.info.price ? (item.card.info.price / 100) : (item.card.info.defaultPrice / 100) } 
    </span>
    </div>

  <p className="text-xs p-5 -ml-5">{item.card.info.description}</p>
    </div>
      
      <div className=" p-4 w-3/12">
      <div className="absolute pt-[66px]">
        <button className="bg-black text-white p-1 shadow-md"
        onClick={() =>handleAdditem(item)}
        >Add+</button>
      </div>
      <img src={CDN_URL + item.card.info.imageId} className="w-[160px] h-[100px] "/>
       </div>
       </div>
        
        ))}
    </div>
   );
}

export default ItemList;