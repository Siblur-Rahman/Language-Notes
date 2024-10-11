import {useEffect } from "react";
import {Active} from "../../shared/CommonJS"
import School from "./School";
import Blog from "../../shared/Blog";

const EnglishNotes = () => {
    useEffect(() =>{
        Active();
    })

    return ( 
            <div className="">
            <School/>
            <Blog

            />

        </div>    
    );
};

export default EnglishNotes;