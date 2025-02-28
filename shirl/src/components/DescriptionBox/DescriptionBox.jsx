import react from "react";
import './components/DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigatior">
                <div className="descriptionbox-nav-box"> Description </div>
            </div>
            <div className="descriptionbox-nav-box fade"> Reviews (122) </div>
            <div className="descriptionbox-description">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Vero aliquam consequatur esse ipsa ex nihil dolores aliquid omnis
                     exercitationem cumque!
                     Aliquam debitis inventore sed nulla perferendis possimus 
                     dolore voluptatem reprehenderit!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Hic impedit dolor officiis, aperiam laboriosam, expedita magnam quas,
                      accusamus fugiat corrupti beatae ea odio velit.
                      Corrupti nam praesentium ipsum provident iste!
                </p>
            </div>
        </div>
      );
}

export default DescriptionBox ;