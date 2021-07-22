import { useSelector, useDispatch } from "react-redux";
import { History } from "history";

const useNavigator = (history: History) =>{
    const activeTab = useSelector((state: any) => state.tabReducer);
    const dispatch = useDispatch();
    const handleTabClick = (
        index: Number,
        path: String
    ) =>{
        dispatch({
            type: "SET_TAB",
            payload: index
        });
        history.push(path as string);
    }
    return {
        activeTab,
        handleTabClick
    }
}

export default useNavigator;
