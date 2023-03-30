import { useState } from "react"
import MenuItem from "./components/MenuItem"

const App = () => {
  const [menu, setMenu] = useState([
    { name: "Burger", ordered: false },
    { name: "NY Hot Dogs", ordered: false },
    { name: "Chicken Wings", ordered: false },
    { name: "Sushi", ordered: false },
    { name: "Coors Light", ordered: false },
  ])

  const orderMenuItem = (selectedItem) => {
    menu[selectedItem].ordered = true
    setMenu([...menu])
  }
  return (
    <div className="main-container">
      <div className="menu-div">
        <h1>Bravo Tailgate Party</h1>
        <h4>Menu</h4>

        {menu.map((menuItem, index) => {
          return (
            <MenuItem
              menuItem={menuItem}
              orderMenuItem={orderMenuItem}
              key={index}
              index={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
