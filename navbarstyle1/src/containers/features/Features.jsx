import React from 'react';
import './features.css';
import currency1 from '../../assets/currency5.png';

const Features = () => {
    return (
        <div className="project__features" id="features">
            <div className="project__features-container">
                <div className="project__features-content">
                    <div className="project__features-content_image">
                        <img src={currency1} alt="currency" />
                    </div>
                </div>
                <div className="project__features-container_text">
                    <div className="project__features-container_text-title">
                        <h1>
                            What is NFTs?
                        </h1>
                    </div>
                    <div className="project__features-container_text-subtext">
                        <p>
                        Praesent a orci eget risus egestas rhoncus ut iaculis elit. Phasellus pharetra massa at vulputate pellentesque. Fusce tempor tellus erat, eget consectetur libero auctor ac. Sed sapien ex, scelerisque tincidunt nunc sit amet, scelerisque faucibus dolor.
                        </p>
                        <p>
                        Ut scelerisque augue sit amet egestas mollis. Quisque dignissim, mi nec hendrerit efficitur, nisi arcu dignissim lorem, ac porttitor augue mi eu ligula. Nunc molestie eget sem ut porttitor. Ut interdum feugiat consequat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features