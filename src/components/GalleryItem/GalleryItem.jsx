import React, {useState} from 'react';
import axios from 'axios';

function GalleryItem({task, setUpdateData}) {

    let [displayImage, setDisplayImage] = useState(true);

    //add like to galleryData
    const addLike = () => {
        let id = task.id
        console.log(typeof id)
        axios.put(`/gallery/like/${id}`)
        .then((response) =>{
        console.log(response.data);
        setUpdateData(Math.random()) //changes updateData so that page reloads via useEffect hook in App component
        })
        .catch((error) => {
        console.log(error)
        })
    }

    //delete photo from galleryData
    const deletePhoto = () => {
        let id = task.id
        console.log(typeof id)
        axios.delete(`/gallery/${id}`)
        .then((response) =>{
        console.log(response.data);
        setUpdateData(Math.random()) //changes updateData so that page reloads via useEffect hook in App component
        })
        .catch((error) => {
        console.log(error)
        })
    }

    return(
        <div className="galleryitem" key={task.id}>
            {(displayImage == true) ? <img src={task.path} onClick={() => setDisplayImage(false)}/> : <div className="description"><p onClick={() => setDisplayImage(true)}>{task.description}</p> <button onClick={deletePhoto}>delete photo</button></div>}
            <p>likes: {task.likes}</p>
            <button onClick={addLike}>Like it!</button>
        </div>
    )
}

export default GalleryItem;