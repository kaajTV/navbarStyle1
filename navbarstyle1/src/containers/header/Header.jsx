import React from 'react';
import './header.css';
import pc1 from '../../assets/computerCoding1.png';
import marketing1 from '../../assets/marketing1.png';
import currency4 from '../../assets/currency4.png';

const Header = () => {
    return (
        <div className="project__header" id="home">
            <div className="project__header-container">
                <div className="project__header-container_text">
                    <h1 className="project__header-container_text-title">
                        Buy Crypto With NFTs
                    </h1>
                    <p className="project__header-container_text-subtext">
                    Ut scelerisque augue sit amet egestas mollis. Quisque dignissim, mi nec hendrerit efficitur, nisi arcu dignissim lorem, ac porttitor augue mi eu ligula. Nunc molestie eget sem ut porttitor. Ut interdum feugiat consequat. Quisque imperdiet cursus orci sit amet tristique. Nunc finibus finibus convallis. Maecenas tempor eleifend velit, non efficitur metus mattis eleifend. Vivamus quis neque id tellus sagittis ornare sit amet non sem. Proin a eros tortor. In porta consectetur libero, ut tempor ex tristique eget.
                    </p>
                    <div className="project__header-container_button">
                        <button>
                            <a href="#">Buy Crypto</a>
                        </button>
                    </div>
                </div>
                <div className="project__header-container_image">
                    <img src={currency4} alt="marketing" />
                </div>
            </div>
        </div>
    )
}

export default Header