import "./Text.css";
import { TextComponentProps } from "./Props";

const Text:React.FC<TextComponentProps> = ({
    children,
    textAlign="left",
    className="",
    color="dark",
    fontSize="20px",
    fontWeight="lighter",
    style={}
}) =>(
    <p
        className={`text ${className}`}
        style={{
            textAlign: textAlign,
            color: (color === "dark") ? "#2C3539" : "#FFD800",
            fontWeight: fontWeight,
            fontSize: fontSize as string,
            ...style
        }}
    >
        { children }
    </p>
);

export default Text;
