import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as CarouselComponent } from 'react-responsive-carousel';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ImageViewer } from "components";

const Carousel:React.FC<{ thumbnails?: String[] }> = ({ thumbnails=[] }) =>{
    const dispatch = useDispatch();
    const [productThumbnail, setProductThumbnail] = useState("");
    return (
        <>
            <CarouselComponent className="carousel-component">
                {
                    thumbnails.map(thumbnail =>(
                        <div 
                            className="carousel-component-container"
                            onClick={() =>{
                                setProductThumbnail(`http://localhost:5000/${thumbnail}`);
                                dispatch({
                                    type: "TOGGLE_IMAGE_VIEWER_MODAL",
                                    payload: true
                                })
                            }}
                        >
                            <img 
                                src={`http://localhost:5000/${thumbnail}`}
                                alt="" 
                            />
                        </div>
                    ))
                }
            </CarouselComponent>
            <ImageViewer src={productThumbnail} />
        </>
    );
}

export default Carousel;
