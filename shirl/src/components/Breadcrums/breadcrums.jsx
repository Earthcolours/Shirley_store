import react from "react";
import './components/breadcrums.css';
import arrow_icon from '../assets/breadcrums_arrow.png';

const Breadcrums = (props) => {
    const {product} = props;
    return (
        <div className="breadcrums">
            HOME <img src={arrow_icon} alt="" />
            SHOP <img src={arrow_icon} alt="" />
            {product.category} <img src={arrow_icon} alt="" />
            {product.name}
        </div>
      );
}

export default Breadcrums;