import React from "react";
import VideoItem from "./VideoItem";


//  class VideoList extends React.Component{

//      //try=this.props.videos;
//      render(){

//          console.log(this.props.videos);
//          //console.log(props.videos.lenght); why this comes undefined
//          return<div>{this.props.videos.length}</div>;
//      }
//  }
//  export default VideoList;

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
          video={video}
        />
      );
    });
  
    return <div className="ui relaxed divided list">{renderedList}</div>;
  };
  
  export default VideoList;

