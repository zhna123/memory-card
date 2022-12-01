import React, { useEffect, useState } from "react";
import plantImage from "../images/plant.jpeg"
import leafImage from "../images/leaf.jpeg"
import decorImage from "../images/decor.jpeg"
import planterImage from "../images/planter.jpeg"
import whitePlanterImage from "../images/white_planter.jpeg"
import tableChairImage from "../images/table_chair.jpeg"
import viewImage from "../images/view.jpeg"
import wallImage from "../images/wall.jpeg"
import drawingImage from "../images/drawing.jpeg"

import uniqid from 'uniqid';

const ImageDisplay = ({incrementScore, resetScore, incrementBestScore}) => {

    const originalImages = [plantImage, leafImage, decorImage, planterImage, 
        whitePlanterImage, tableChairImage, viewImage, wallImage, drawingImage];

    const indexedImages = originalImages.map(item => {
        return {id: uniqid(), image: item}
    })

    const [images, setImages] = useState(indexedImages);
    const [lastClickedId, setLastClickedId] = useState(0);
    const [leftNumberOfClicks, setLeftNumberOfClicks] = useState(images.length);

    useEffect(() => {
        shuffleImages();
    }, []);

    const shuffleImages = () => {
        const newImages = images.slice();
        for (let i = newImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newImages[i], newImages[j]] = [newImages[j], newImages[i]];
        }
        setImages(newImages);
    }  

    const handleScoreChange = (id) => {
        if (id !== lastClickedId && leftNumberOfClicks !== 0) {
            incrementScore();
            setLastClickedId(id);
            setLeftNumberOfClicks(leftNumberOfClicks - 1)
        } else {
            // this case, we double clicked, or we won a round
            // everything reset, best score updated
            alert('already clicked this one!')
            resetScore();
            incrementBestScore();
            // reset everything
            setLastClickedId(0);
            setLeftNumberOfClicks(images.length)
        }
    }


    return (
        <div className="image_display">
            
           {
            images.map(item => (
                <img key={item.id} src={item.image} alt="" 
                    onClick={() => {
                        shuffleImages();
                        handleScoreChange(item.id);
                    }}/>
            ))
           } 
        </div>
    )
}

export default ImageDisplay;