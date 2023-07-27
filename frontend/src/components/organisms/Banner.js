import React from "react";
const handleBannerClick = () => {
    prompt("You are above 18 years of age and not buying tobacco on behalf of anyone who is a minor (under 18 years of age).");
};


export default function Banner(){
    return(

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active" onClick={handleBannerClick}>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
    )

}