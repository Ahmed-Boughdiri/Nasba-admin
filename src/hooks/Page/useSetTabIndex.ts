import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useSetTabIndex = (tabIndex: Number) =>{
    const dispatch = useDispatch();
    const setTabIndex = () =>{
        dispatch({
            type: "SET_TAB",
            payload: tabIndex
        });
    }
    useEffect(() =>{
        setTabIndex()
    }, []);
}

export default useSetTabIndex;
