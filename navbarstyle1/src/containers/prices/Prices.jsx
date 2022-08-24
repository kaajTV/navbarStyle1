import React from 'react';
import './prices.css';
import { RiMoreLine } from 'react-icons/ri';

const Prices = () => {
    return (
        <div className="project__prices" id="prices">
            <div className="project__prices-container">
                <div className="project__prices-container_text">
                    <div className="project__prices-container_text-title">
                        <h1>NFTs Prices</h1>
                    </div>
                    <div className="project__prices-container_text-subtext">
                        <p>
                            Vivamus quis neque id tellus sagittis ornare sit amet non sem. Proin a eros tortor. In porta consectetur libero, ut tempor ex tristique eget.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contains All Boxes */}
            <div className="project__prices-content">
                <div className="project__prices-content_boxes">

                    {/* START Box 1 */}
                    <div className="project__prices-content_boxes-container">
                        <div className="project__prices-content_boxes-header">
                            <h3 className="project__prices-content_boxes-header-title">
                                Basic Plan
                            </h3>
                            <RiMoreLine size={27} color="#fff" />
                        </div>
                        <div className="project__prices-content_boxes-price">
                            <h4>$10<span>/ months</span></h4>
                        </div>
                        <div className="project__prices-content_boxes-list">
                            <ul className="project__prices-content_boxes-items">
                                <li>phasellus quis enim</li>
                                <li>nec nisi hendrerit</li>
                                <li className="red">praesent convallis iaculis</li>
                                <li>mauris sodales</li>
                                <li className="red">pellentesque</li>
                                <li>odio nec lacinia</li>
                            </ul>
                        </div>
                        <div className="project__prices-content_boxes-button">
                            <button>
                                <a href="#">
                                    Choose Plan
                                </a>
                            </button>
                        </div>
                    </div>
                    {/* END Box 1 */}

                    {/* START Box 2 */}
                    <div className="project__prices-content_boxes-container">
                        <div className="project__prices-content_boxes-header">
                            <h3 className="project__prices-content_boxes-header-title">
                                Advanced Plan
                            </h3>
                            <RiMoreLine size={27} color="#fff" />
                        </div>
                        <div className="project__prices-content_boxes-price">
                            <h4>$25<span>/ months</span></h4>
                        </div>
                        <div className="project__prices-content_boxes-list">
                            <ul className="project__prices-content_boxes-items">
                                <li>phasellus quis enim</li>
                                <li>nec nisi hendrerit</li>
                                <li>praesent convallis iaculis</li>
                                <li>mauris sodales</li>
                                <li>pellentesque</li>
                                <li className="red">odio nec lacinia</li>
                                <li>odio nec lacinia</li>
                            </ul>
                        </div>
                        <div className="project__prices-content_boxes-button">
                            <button>
                                <a href="#">
                                    Choose Plan
                                </a>
                            </button>
                        </div>
                    </div>
                    {/* END Box 2 */}

                    {/* START Box 3 */}
                    <div className="project__prices-content_boxes-container">
                        <div className="project__prices-content_boxes-header">
                            <h3 className="project__prices-content_boxes-header-title">
                                Expert Plan
                            </h3>
                            <RiMoreLine size={27} color="#fff" />
                        </div>
                        <div className="project__prices-content_boxes-price">
                            <h4>$50<span>/ months</span></h4>
                        </div>
                        <div className="project__prices-content_boxes-list">
                            <ul className="project__prices-content_boxes-items">
                                <li>phasellus quis enim</li>
                                <li>nec nisi hendrerit</li>
                                <li>praesent convallis iaculis</li>
                                <li>mauris sodales</li>
                                <li>pellentesque</li>
                                <li>odio nec lacinia</li>
                                <li>odio nec lacinia</li>
                                <li>odio nec lacinia</li>
                            </ul>
                        </div>
                        <div className="project__prices-content_boxes-button">
                            <button>
                                <a href="#">
                                    Choose Plan
                                </a>
                            </button>
                        </div>
                    </div>
                    {/* END Box 3 */}

                </div>
            </div>
        </div>
    )
}

export default Prices