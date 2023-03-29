import React from "react"

const MediaPlayer = (props) => {
  console.log(props)
  return (
    <div className="media-player">
      <h3>Current episode: {props.currentEpisode}</h3>
      <button onClick={props.triggerNextEpisode}>Play Next Episode</button>
    </div>
  )
}

export default MediaPlayer
