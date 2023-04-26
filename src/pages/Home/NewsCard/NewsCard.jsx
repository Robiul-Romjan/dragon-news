import React from 'react';

const NewsCard = ({singleNews}) => {

    return (
        <div>
            <h2>{singleNews.title}</h2>
        </div>
    );
};

export default NewsCard;