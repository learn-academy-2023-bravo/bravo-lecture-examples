import React, { useState } from "react"
import Episode from "./components/Episode"
import MediaPlayer from "./components/MediaPlayer"
import "./App.css"

const App = () => {
  const episodes = [
    "A New Era of Framework Agnostic Components",
    "Goodbye Passwords, Hello Passkeys",
    "Modern Best Practices are Hurting the Web",
    "Test Driven Development (TDD) and Testing",
    "An Average Developer Does Above Average Things",
    "Stoic Coding",
    "Full Time Content Creation",
    "So you want to be a Developer Advocate?"
  ]
  const [currentEpisode, setCurrentEpisode] = useState(episodes[0])

  // function that gets passed to the button in media player
  const triggerNextEpisode = () => {
    let nextEpisode = episodes.indexOf(currentEpisode) + 1
    setCurrentEpisode(episodes[nextEpisode])
  }

  return (
    <>
      <h1>Compressed.fm Clone</h1>
      <MediaPlayer
        currentEpisode={currentEpisode}
        triggerNextEpisode={triggerNextEpisode}
      />
      <div className="cards">
        {episodes.map((episode, index) => {
          return <Episode title={episode} key={index} />
        })}
      </div>
    </>
  )
}

export default App
