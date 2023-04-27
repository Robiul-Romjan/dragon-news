import React, { useEffect, useState } from 'react';
import "./LeftNav.css"
import { Link } from 'react-router-dom';
import UnderLeft from './UnderLeft';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("/categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <div className='category-title'>
                <p className='national mt-3'>National News</p>
            </div>
            <div className='mt-4 ps-5'>
                {
                    categories.map(category => <p  key={category.id}>
                        <Link to={`/category/${category.id}`} className='category-list'>{category.name}</Link>
                    </p>)
                }
            </div>
            <UnderLeft />
        </div>
    );
};

export default LeftNav;