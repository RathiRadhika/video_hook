import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import UseVideos from "../hooks/UseVideos";

const App =()=>{

  
  const[selectedVideo,setSelectedVideo]=useState(null);
  const[videos,search]=UseVideos('buildings');

  useEffect(()=>{
    setSelectedVideo(videos[0]);

  },[videos]);
  //setSelectedVideo(response.data.items[0]);

  
  
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default App;