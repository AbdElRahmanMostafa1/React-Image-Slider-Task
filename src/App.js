import { useEffect, useState } from "react";
import "./App.css";

let sliderIntervalId;

function App() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [sliderOn, setSliderOn] = useState(false);

  const images = [
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
  ];

  const nextImageHandler = () => {
    if (currentImgIndex < images.length - 1) {
      return setCurrentImgIndex((prevIndex) => (prevIndex += 1));
    } else {
      return setCurrentImgIndex(0);
    }
  };

  const prevImageHandler = () => {
    if (currentImgIndex <= 0) {
      return setCurrentImgIndex(images.length - 1);
    } else {
      return setCurrentImgIndex((prevIndex) => (prevIndex -= 1));
    }
  };

  useEffect(() => {
    if (sliderOn) {
      sliderIntervalId = setInterval(nextImageHandler, 2000);
    } else {
      clearInterval(sliderIntervalId);
    }

    return () => {
      clearInterval(sliderIntervalId);
    };
  }, [sliderOn, images.length, currentImgIndex]);

  return (
    <section className="App">
      <article>
        <img src={images[currentImgIndex]} alt="nature " />
      </article>
      <button onClick={prevImageHandler}>Prev</button>
      <button onClick={() => setSliderOn(true)}>Slider</button>
      <button onClick={() => setSliderOn(false)}>Stop</button>
      <button onClick={nextImageHandler}>Next</button>
    </section>
  );
}

export default App;
