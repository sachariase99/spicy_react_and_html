import React, { useState } from 'react';
import choose1 from '../images/Product/Choose-01.jpg';
import choose2 from '../images/Product/Choose-02.jpg';
import choose3 from '../images/Product/Choose-03.jpg';
import choose4 from '../images/Product/Choose-04.jpg';
import choose5 from '../images/Product/Choose-05.jpg';

const GalleryChanger = () => {
    // Definerer tilstandsværdier for det store billede og de små billeder
    const [bigImage, setBigImage] = useState(choose1);
    const [smallImage1, setSmallImage1] = useState(choose2);
    const [smallImage2, setSmallImage2] = useState(choose3);
    const [smallImage3, setSmallImage3] = useState(choose4);
    const [smallImage4, setSmallImage4] = useState(choose5);

    // Funktion til at skifte billeder
    const swapImages = (smallImage, setSmallImage, bigImage, setBigImage) => {
        setSmallImage(bigImage);
        setBigImage(smallImage);
    };

    return (
        <div>
            <div className="max-w-[1000px] grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 gap-2 text-white cursor-pointer">
                <div className="div1 col-span-2 row-span-2">
                    <img className="w-[100%] cursor-default" src={bigImage} alt="Selected" />
                </div>
                <div className="div2 col-span-1 row-span-1" onClick={() => swapImages(smallImage1, setSmallImage1, bigImage, setBigImage)}>
                    <img className="w-[100%] transition duration-300 ease-out hover:ease-in grayscale hover:grayscale-0" src={smallImage1} alt="Choose" />
                </div>
                <div className="div3 col-span-1 row-span-1" onClick={() => swapImages(smallImage2, setSmallImage2, bigImage, setBigImage)}>
                    <img className="w-[100%] transition duration-300 ease-out hover:ease-in grayscale hover:grayscale-0" src={smallImage2} alt="Choose" />
                </div>
                <div className="div4 col-span-1 row-span-1" onClick={() => swapImages(smallImage3, setSmallImage3, bigImage, setBigImage)}>
                    <img className="w-[100%] transition duration-300 ease-out hover:ease-in grayscale hover:grayscale-0" src={smallImage3} alt="Choose" />
                </div>
                <div className="div5 col-span-1 row-span-1" onClick={() => swapImages(smallImage4, setSmallImage4, bigImage, setBigImage)}>
                    <img className="w-[100%] transition duration-300 ease-out hover:ease-in grayscale hover:grayscale-0" src={smallImage4} alt="Choose" />
                </div>
            </div>
        </div>
    );
};

export default GalleryChanger;
