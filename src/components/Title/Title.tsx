import "./Title.css";
import { TitleComponentProps } from "./Props";

const Title:React.FC<TitleComponentProps> = ({ 
    children,
    color="dark",
    fontSize="20px",
    textAlign="left",
    fontWeight="bold",
    className="",
    style={}
}) =>(
    <h1 
        className={`title ${className}`}
        style={{
            color: (color === "dark") ? "#2C3539" : "#FFD800",
            fontSize: fontSize as string,
            textAlign: textAlign,
            fontWeight: fontWeight,
            ...style
        }}
    >
        { children }
    </h1>
);

export default Title;
