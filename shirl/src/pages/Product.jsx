import react, {useContext} from 'react';
import {ShopContext} from '../context/ShopContext';
import { useParams } from 'react-router';
import Breadcrums from '../components/Breadcrums/breadcrums.jsx';

const Product = () => {
    const {all_product} = useContext(ShopContext)
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId));
    return(
        <div className='product'>
            <Breadcrums product = {product} />
            <ProductDisplay product = {product} />
            <DescriptionBox />
            <RelatedProducted />
        </div>
    )
}
export default Product