import React from "react";

function Rating({ rating }) {
    const range = [1, 2, 3, 4, 5];

    return (
        <div id="host-stars">
            {range.map((rangeElem) =>
                rating >= rangeElem ? (
                    <svg
                        key={rangeElem.toString()}
                        className="star"
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="star-red"
                            d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                        />
                    </svg>
                ) : (
                    <svg
                        key={rangeElem.toString()}
                        className="star"
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="star-grey"
                            d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                        />
                    </svg>
                )
            )}
        </div>
    );
}

export default Rating;
