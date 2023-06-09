import React, { useState } from "react";

function Slider({ pictures }) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1);
    };

    return (
        <section id="gallery"> 
            {pictures.length > 1 && (
                <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
            )}
            {pictures.length > 1 && (
                <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
            )}

            {pictures.map((img, index) => {
                return (
                    <div key={index}>
                        {index === current && (
                            <img
                                src={img}
                                alt="Photos du logement"
                                className="gallery-image"
                            />
                        )}
                        {index === current && (
                            <span className="gallery-image-number">
                                {current + 1}/{pictures.length}
                            </span>
                        )}
                    </div>
                );
            })}
        </section>
    );
}

export default Slider;
