import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
    const renderedList = props.videos.map((video) => {
        return <VideoItem id={video.id.videoId} onVideoSelect={props.onVideoSelect} item={video}/>
    })

    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;