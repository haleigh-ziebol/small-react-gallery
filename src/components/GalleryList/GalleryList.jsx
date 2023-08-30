import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({galleryData, setUpdateData}) {
    return(
        <div className="gallerylist">
            {galleryData.map(task => <GalleryItem task={task} setUpdateData = {setUpdateData}/>)}
        </div>
    );

}

export default GalleryList;