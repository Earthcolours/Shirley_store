import React, { createContext } from 'react';
import all_product from "../components/assets/all_product";
import Item from '../components/Item/Item';


// Create context
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

// Create provider component
const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) => {
        setCartItems((prev))=> ({...prev, [itemId]:prev[itemsId] +1})
        console.log(cartItems);
    }

    const removeFromCart = ((prev)) => {
        removeFromCart((prev)) => ({...prev, [itemId]:prev[itemsId] -1 })
    }
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems)
        {
            if (cartItems[items]>0)
            {
                let itemsInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[items];
            }
        }
        return totalAmount;
    }

    const getTotalCartAmount =()=>{
        let totalItem = 0;
        for (const item in cartItems)
        {
            if(cartItems[items]>0)
            {
                totalItems+= cartItems[items];
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;