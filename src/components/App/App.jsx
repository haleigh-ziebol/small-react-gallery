import React, {useState, useEffect} from 'react';
import axios from 'axios';
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

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of Mushrooms</h1>
      </header>
      <GalleryList setUpdateData= {setUpdateData} galleryData={galleryData} />
    </div>
  )
}

export default App;
