import React, { useContext, useEffect } from "react";
import './CSS/ShopCategory.css';
import {ShopContext} from "../context/ShopContext";
import dropdown_icon from '../components/assets/dropdown_icon.png';
import Item from "../components/Item/Item.jsx";
import all_product from "../components/assets/all_product.js";

const ShopCategory = (props) => {
   const context = useContext(ShopContext);
   const all_product = context?. all_product || [];
   
   // Debug logging
   useEffect(() => {
     console.log("Context:", context);
     console.log("All products:", all_product);
     console.log("Current category:", props.category);
     console.log("Filtered products:", all_product.filter(item => item.category === props.category));
   }, [context, all_product, props.category]);

   // Check if we have products to display
   const filteredProducts = all_product.filter(item => item.category === props.category);
   
   return(
        <div className="Shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span> Showing {filteredProducts.length > 0 ? `1 - ${filteredProducts.length}` : '0'} </span> 
                    out of {all_product.length} products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.length > 0 ? (
                    filteredProducts.length > 0 ? (
                        filteredProducts.map((item, i) => (
                            <Item key={i}
                             id={item.id} 
                             name={item.name} 
                             image={item.image}
                             new_price={item.new_price} 
                             old_price={item.old_price}
                             />
                        ))
                    ) : (
                        <div className="no-products">No products found in this category</div>
                    )
                ) : (
                    <div className="loading">Loading products...</div>
                )}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
};

export default ShopCategory;