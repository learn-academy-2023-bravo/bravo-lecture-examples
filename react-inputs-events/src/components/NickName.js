  // import
  import React, {useState} from "react"

  // functional component declaration
  const NickName = () => {
      // additional data
  const [user, setUser] = useState("")
  const [nickName, setNickName] = useState("")
  const handleChange = (e) => {
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.value)
    setUser(e.target.value)
  }
  const handleNickName = (e) => {
    setNickName(e.target.value)
  }
    // return to the UI
    return(
      <>
        <input 
        type="text" 
        placeholder="What is your name?"
        value={user}
        onChange={handleChange}
      />
      <input 
        type="text" 
        placeholder="What is your nickname?"
        value={nickName}
        onChange={handleNickName}
      />
      <p>{user}, thanks for helping Charlean. Can we call you {nickName}</p>
      </>
    )
  }

  // export
  export default NickName