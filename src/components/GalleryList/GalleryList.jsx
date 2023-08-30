import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({galleryData}) {
    return(
        <div className="gallerylist">
            {galleryData.map(task => <GalleryItem task={task}/>)}
        </div>
    );

}

export default GalleryList;