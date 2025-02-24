import React from 'react';
import all_product from "../components/assets/all_product";

export const ShopContextProvider = createContext(null);

const contextValue = (props) => {

    const ContextValue={all_product}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;