import { LoaderProps } from "./Props";
import ScreenLoader from "./ScreenLoader/ScreenLoader";
import ComponentLoader from "./ComponentLoader/ComponentLoader";

const Loader:React.FC<LoaderProps> = ({ type }) =>(
    <>
        {
            (type === "SCREEN") && <ScreenLoader />
        }
        {
            (type === "COMPONENT") && <ComponentLoader />
        }
    </>
);

export default Loader;
