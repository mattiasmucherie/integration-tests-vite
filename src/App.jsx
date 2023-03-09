import "./App.css";
import { useState, useEffect } from "react";
import { PhotoViewer } from "./components/PhotoViewer";
import { Loader } from "./components/Loader";
import { Header } from "./components/Header";

function App() {
  const [image, setImage] = useState(null);
  const [imageId, setImageId] = useState(null);

  useEffect(() => {
    if (imageId) {
      fetchImageData();
    }
  }, [imageId]);

  const fetchImageData = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${imageId}`).then(
      (response) => {
        response.json().then((data) => {
          setImage({
            url: data.url,
            title: data.title,
          });
        });
      }
    );
  };

  const increaseImageId = () => {
    setImageId((imageId) => imageId + 1);
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };
  return (
    <div className="App">
      <Header />
      {image ? <PhotoViewer image={image} /> : <p>Loading...</p>}
      <button role="button" onClick={increaseImageId}>
        Load new image
      </button>
    </div>
  );
}

export default App;
