
function GalleryItem({task}) {
    return(
        <div key={task.id}>
            <img src={task.path}/>
            <p>{task.description}</p>
            <p>likes: {task.likes}</p>
        </div>
    )
}

export default GalleryItem;