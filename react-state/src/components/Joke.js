  // imports
  import React, {useState} from "react"

  // functional component declaration
  const Joke = () => {

    // add state above the return statement
    const [joke, setJoke] = useState("Why did the cowboy have a weiner dog? Somebody told him to get a long little doggy.")

    // array of jokes
    const moreJokes = [
      "Why did the walrus go to a tupperware party? To find a tight Seal!",
      "What award did the dentist get for fixing everyone's teeth? A plaque!",
      "Why was Cinderella so bad at soccer? She kept running away from the ball!",
      "Why did the scarecrow get an award? He was outstanding in his field.",
      "Why couldn't the bicycle stand up by itself? It was too tired",
      "Why do ducks have feathers? To cover their butt quacks!",
      "Why did the functions stop calling each other? Because they were having constant arguments!",
      "When I was a kid, my dad got fired from his job as a road worker for theft. I refused to believe he could do such a thing, but when I got home, the signs were all there.",
      "To whoever stole my copy of Microsoft Office, I will find you. You have my Word.",
      "If you tell a dad joke and you are not a dad is it a faux pas?"
    ]

    // custom function
    const handleJoke = () => {
      const randomNum = Math.floor(Math.random() * moreJokes.length)
      setJoke(moreJokes[randomNum])
    }

    return(
      <>
        <p>Joke: {joke} </p>
        <button 
          onClick={handleJoke} 
          style={{
            backgroundColor: "black",
            color: "white"
          }}
        >
          Click for a new joke
        </button>
      </>
    )
  }

  // export
  export default Joke