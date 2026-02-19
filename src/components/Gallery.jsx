import { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import "./Gallery.css"

const Gallery = ({className = "", width = "100%", height = "100%", radius = "0px", showThumbs=false, showDots=false, images = []}) => {

    const [indexAtual, setIndexAtual] = useState(0);
    
    if(!images.length) return null;

    const prevImg = () => {
        if(indexAtual > 0){
            setIndexAtual(indexAtual - 1);
        }
    };

    const nextImg = () => {
        if(indexAtual < images.length - 1){
            setIndexAtual(indexAtual + 1);
        }
    };

    return (
        <div className={`gallery ${className}`} style={{width}}>
            <div className="slider-wrapper" style={{height, borderRadius: radius}}>
                <div className="slider" style={{transform: `translateX(-${indexAtual*100}%)`}}>
                    {images.map((image, index) => (
                        <div className="galleryContent" key={index}>
                            <img
                                src={image.src}
                                alt={`Imagem ${index+1}`}
                                style={{borderRadius: radius}}
                            />
                            <div className="gallery-infos">
                                <h3 className="gallery-subtitle">{image.subtitle}</h3>
                                <h1 className="gallery-title">{image.title}</h1>
                                <p className="gallery-description">{image.description}</p>
                                <button className="gallery-button">Descobrir</button>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="gallery-arrow left" onClick={prevImg} disabled={indexAtual === 0}>
                    <img src={arrowLeft} alt="Anterior"/>
                </button>

                <button className="gallery-arrow right" onClick={nextImg} disabled={indexAtual === images.length-1}>
                    <img src={arrowRight} alt="Próxima"/>
                </button>
            </div>

            {showThumbs && (
                    <div className="gallery-thumbs">
                        {images.map((image, index) => (
                            <img
                                key={index} 
                                src={image.src}
                                alt={`Imagem ${index+1}`}
                                className={index === indexAtual ? "active" : ""}
                                style={{borderRadius: radius}}
                                onClick={() => setIndexAtual(index)}
                            />
                        ))}
                    </div>
                )}

                {showDots && (
                    <div className="gallery-dots">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === indexAtual ? "active" : ""}`}
                                onClick={() => setIndexAtual(index)}
                                aria-label={`Ir para imagem ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
        </div>
    );
}

export default Gallery;