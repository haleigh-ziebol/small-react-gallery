import axios from 'axios';

function GalleryItem({task}) {
    //add like to galleryData
    const addLike = () => {
        let id = task.id
        axios.put(`/gallery/like/${id}`)
        .then((response) =>{
        console.log(response.data);
        })
        .catch((error) => {
        console.log(error)
        })
    }
    return(
        <div key={task.id}>
            <img src={task.path}/>
            <p>{task.description}</p>
            <p>likes: {task.likes}</p>
            <button onClick={addLike}>Like</button>
        </div>
    )
}

export default GalleryItem;