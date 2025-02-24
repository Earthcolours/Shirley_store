import react from 'react';
import './NewsLetter.css';

const NewsLetter = ()=>{
    return(
        <div className="newsletter">
            <h2> Manifest Cheer-worthy Offers in your email! </h2>
            <p> Suscribe to our newsletter and stay in score! </p>
            <div>
                <input type='email' placeholder='Email address here, champ!' />
                <button> Suscribe </button>
            </div>
        </div>
    )
}
export default NewsLetter