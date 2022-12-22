import React from "react";
import './VideoItem.css';
// class VideoItem extends React.Component{

//     render(){

//         return <div>Video Item</div>;
//     }
// }

// export default VideoItem;


const VideoItem = ({ video, onVideoSelect }) => {
    return (
      <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img
          alt={video.snippet.title}
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  };
  
  export default VideoItem;