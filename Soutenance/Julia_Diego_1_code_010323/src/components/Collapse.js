import React, { useState } from "react";

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <details className="housing-info-details">
            <summary className="housing-info-title" onClick={handleToggle}>
                {props.title}
                {isOpen ? (
                    <i className="fa-solid fa-chevron-up"></i>
                ) : (
                    <i className="fa-solid fa-chevron-down"></i>
                )}
            </summary>
            {isOpen && <div className="housing-info-text">{props.children}</div>}
        </details>
    );
}

export default Collapse;