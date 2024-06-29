import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

        const dispatch  = useDispatch();        

        const cartItems  = useSelector((store) => store.cart.items);

        const handleClearCart = () => {
            dispatch(clearCart());
        };
    
    return (
        <div>
        <div className="m-5 p-5 shadow-md ">
            <h1 className="text-2xl font-bold text-center">Cart</h1>
            <button className="bg-orange-400 text-white p-4 mx-[1300px] "
            onClick={handleClearCart}
            >ClearCart</button>
        </div>
        <div className="w-6/12 m-auto shadow-lg shadow-orange-200">
        {cartItems.length  == 0 && (
            <h1> Cart is Empty . Add items to the Cart !! </h1>
        )}
        <ItemList items = {cartItems} />
        </div>
        </div>
    );

};

export default Cart;