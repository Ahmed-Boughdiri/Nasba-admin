import "./ImageViewer.css";
import theme from "theme";
import { useSelector, useDispatch } from "react-redux";

const ImageViewer:React.FC<{ src?: String }> = ({ src="" }) =>{
    const showImageViewer:Boolean = useSelector((state: any) => state.imageViewerReducer);
    const dispatch = useDispatch();
    return (
        <>
            {
                showImageViewer && (
                    <div className="image-viewer-container">
                        <div className="image-viewer-wrapper">
                            <img 
                                src={src as string}
                                alt=""
                            />
                        </div>
                        <div className="image-viewer-cancel-icon-container">
                            <img 
                                src={theme.icons.cancel}
                                alt=""
                                onClick={() =>{
                                    dispatch({
                                        type: "TOGGLE_IMAGE_VIEWER_MODAL",
                                        payload: false
                                    })
                                }} 
                            />
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default ImageViewer;
