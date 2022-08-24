import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="project__footer">
            <div className="project__footer-container">

                {/* Column 1 */}
                <div className="project__footer-container_content">
                    <div className="project__footer-container_content-header">
                        <h2>Consequat</h2>
                    </div>
                    <div className="project__footer-container_content-links">
                        <ul className="project__footer-container_content-items">
                            <li>Etiam euismod</li>
                            <li>Aliquam elementum</li>
                            <li>Dolor sit amet</li>
                            <li>Morbi convallis</li>
                        </ul>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="project__footer-container_content">
                    <div className="project__footer-container_content-header">
                        <h2>Consequat</h2>
                    </div>
                    <div className="project__footer-container_content-links">
                        <ul className="project__footer-container_content-items">
                            <li>Etiam euismod</li>
                            <li>Aliquam elementum</li>
                            <li>Dolor sit amet</li>
                            <li>Dolor sit amet</li>
                            <li>Morbi convallis</li>
                            <li>Morbi convallis</li>
                        </ul>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="project__footer-container_content">
                    <div className="project__footer-container_content-header">
                        <h2>Policy</h2>
                    </div>
                    <div className="project__footer-container_content-links">
                        <ul className="project__footer-container_content-items">
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Cookies Policy</li>
                            <li>Return Policy</li>
                            <li>EULA</li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Footer End */}
            <div className="project__footer-end">
                <div className="project__footer-end_container">
                    <div className="project__footer-end_container-copyright">
                        <p>
                            &copy;2022 Gothenburg Sweden, Inc. All rights reserved.
                        </p>
                    </div>
                    <div className="project__footer-end_container-author">
                        <p>Anton Holmgren</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer