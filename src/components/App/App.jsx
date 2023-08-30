import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';

import GalleryList from '../GalleryList/GalleryList.jsx';
import './App.css';

function App() {
  let [galleryData, setGalleryData] = useState([]);
  let [updateData, setUpdateData] = useState(0)

  //fetch gallery data
  const fetchData = () => {
    axios.get('/gallery')
    .then((response) =>{
      console.log(response.data);
      setGalleryData(response.data);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  //runs fetchData
  useEffect(() => {
    fetchData(); //run when page loads
    if (updateData) // runs fetchData when updateData variable changes
    fetchData();
  }, [updateData])

  //Modal
  const [modalIsOpen, setIsOpen] = useState(false);
  let [photoURL, setPhotoURL] = useState('');
  let [photoDescription, setPhotoDescription] = useState('');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addItem = (evt) => {
    evt.preventDefault();
    axios.post('/gallery', {path: photoURL, description: photoDescription})
    .then((response) => {
        console.log(response);
        evt.target.reset();
        setUpdateData(Math.random())
        alert('Photo was added!')
    })
    .catch((error) => {
        console.log(error);
    });
  }


  return (
    <div className="App">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal" 
      >
        <button onClick={closeModal}>close</button>
        <br/>
        <form onSubmit={addItem}>
          <label htmlFor="photo-link">Photo URL: </label>
          <input type="url" id="photo-link" onChange={e => setPhotoURL(e.target.value)} required/>
          <br/>
          <label htmlFor="photo-description">Photo Description: </label>
          <input type="text" id="photo-description" onChange={e => setPhotoDescription(e.target.value)} required/>
          <br/>
          <button type="submit">Add Photo</button>


        </form>
      </Modal>

      <header className="App-header">
        <h1 className="App-title">Gallery of Mushrooms</h1>
        <button onClick={openModal}>Add Photo</button>
      </header>
      <GalleryList setUpdateData= {setUpdateData} galleryData={galleryData} />
      <br/>
      <br/>
    </div>
  )
}

export default App;
