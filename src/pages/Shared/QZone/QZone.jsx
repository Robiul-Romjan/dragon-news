import React from 'react';
import "./QZone.css";

import qZone1 from "/qZone1.png";
import qZone2 from "/qZone2.png";
import qZone3 from "/qZone3.png";

const QZone = () => {
    return (
        <div className='q-zone mt-5 p-3'>
            <h4>Q-Zone</h4>
            <div className="q-zone-banner text-center">
                <img className='py-3' src={qZone1} alt="" />
                <img className='py-3' src={qZone2} alt="" />
                <img className='py-3' src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;