import React,{useState,useEffect}from "react";

import Yutube from "../api/Yutube";

const UseVideos =({defaultSearchTrem})=>{

    const[videos,setVideos]=useState([]);

    useEffect(()=>{
        search(defaultSearchTrem);
    },[defaultSearchTrem]);

    const search = async (term) => {
        const response = await Yutube.get("/search", {
          params: {
            q: term,
          },
        });
    
        setVideos(response.data.items);
        
    
    };

    return[videos,search];
};

export default UseVideos;