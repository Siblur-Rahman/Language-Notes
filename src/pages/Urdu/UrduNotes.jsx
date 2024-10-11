import {useEffect } from "react";
import {Active} from "../../shared/CommonJS"
import Blog from "../../shared/Blog";
import Channel from "./Channel";

const UrduNotes = () => {
    useEffect(() =>{
        Active();
    })

    return ( 
            <div className="">
                <Channel/>

        </div>    
    );
};

export default UrduNotes;