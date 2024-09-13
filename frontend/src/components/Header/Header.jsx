import React, { useState, useEffect } from 'react';
import './Header.css';
import headerImg1 from '../../assets/header_img.png'; // Import local image
import headerImg2 from '../../assets/img2.png'; // Additional local image
import headerImg3 from '../../assets/header_img2.jpeg'; // Additional local image

const images = [
    headerImg1,
    headerImg2,
    headerImg3
];

const texts = [
    "Order your favourite food here",
    "Fresh and delicious meals at your doorstep",
    "Savor the taste of our culinary masterpieces"
];

const Header = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    // Determine text color class based on current image index
    const getTextColorClass = () => {
        switch (currentImage) {
            case 0:
            case 2:
                return 'text-white';
            case 1:
                return 'text-black';
            default:
                return 'text-white';
        }
    };

    return (
        <div className='header'>
            <div className='header-slider'>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`header-slide ${index === currentImage ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
            </div>
            <div className={`header-contents ${getTextColorClass()}`}>
                <h2>{texts[currentImage]}</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            </div>
        </div>
    );
};

export default Header;
