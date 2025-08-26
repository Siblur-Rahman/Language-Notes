import { useContext } from "react";
import { Context } from "../providers/Provider";
// import { AuthContext } from "../providers/AuthProvider";


const useProvider = () => {
    const info = useContext(Context);
    return info;
};

export default useProvider;