import { useState } from "react";
import "./productGallery.css";
import tenis from "../../../public/produc-image-4.jpeg";
import tenis2 from "../../../public/produc-image-5.jpeg";
import tenis3 from "../../../public/produc-image-3.jpeg";
import tenis4 from "../../../public/produc-image-2.jpeg";
import tenis5 from "../../../public/produc-image-1.jpeg";

const images = [
  tenis,
  tenis2,
  tenis3,
  tenis4,
  tenis5,
];

const ProductGallery = () => {

  const [current, setCurrent] = useState(0);

  function next(){
    setCurrent((current + 1) % images.length);
  }

  function prev(){
    setCurrent((current - 1 + images.length) % images.length);
  }

  return (
    <div className="gallery-product">

      <div className="gallery-product-main">
        <button className="arrow-product left-product" onClick={prev}>‹</button>

        <img src={images[current]} alt="" />

        <button className="arrow-product right-product" onClick={next}>›</button>
      </div>

      <div className="gallery-thumbs-product">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={current === index ? "active" : ""}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

    </div>
  );
}

export default ProductGallery