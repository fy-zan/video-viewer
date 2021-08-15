import React from "react";
import "./VideoItem.css"
const VideoItem = ({item, onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(item)}className="video-item item">
            <img alt={item.snippet.title} className="ui image" src={item.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">{item.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;