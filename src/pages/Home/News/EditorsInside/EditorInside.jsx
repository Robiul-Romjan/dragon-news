import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

import editorImg1 from "/images/editorsInsight1.png";
import editorImg2 from "/images/editorsInsight2.png";
import editorImg3 from "/images/editorsInsight3.png";

const EditorInside = () => {
    return (
        <div className="row mt-5">
            <h4 className='mb-3'>Editors Insight</h4>
            <div className="col-lg-4">
                <div className="card">
                    <img src={editorImg1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">21 The Most Stylish Wedding Guest Dresses For Spring</h5>
                        <p><FaCalendarAlt /> 12-04-2023</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <img src={editorImg2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">21 The Most Stylish Wedding Guest Dresses For Spring</h5>
                        <p><FaCalendarAlt /> 12-04-2023</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <img src={editorImg3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">21 The Most Stylish Wedding Guest Dresses For Spring</h5>
                        <p><FaCalendarAlt /> 12-04-2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorInside;