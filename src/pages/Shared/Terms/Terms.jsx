import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container text-center mt-4'>
            <h2>Our Terms And Conditions</h2>
            <p className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorum illum magni alias officiis repellat enim hic consequatur eum nihil ducimus debitis, unde ex fugit maiores in beatae sunt voluptate quo numquam explicabo odit laboriosam. Quasi, laboriosam quibusdam. Tenetur debitis corrupti sequi dolor consequuntur, cumque animi unde similique aperiam suscipit!</p>
            <Link to="/register" className='mt-4'>Go back to register</Link>
        </div>
    );
};

export default Terms;