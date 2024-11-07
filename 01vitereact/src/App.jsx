import Chai from "./chai"

function App() {
  const username = " chai aur code"
  return (
    <>
    <Chai/>
    <h1>hii there {username}</h1>
    <p>doing react</p>
    </>   /*because we have to return oly one tag at the end so wrap everything that is <chai/>, h1, p in one tag*/
  )
}

export default App
