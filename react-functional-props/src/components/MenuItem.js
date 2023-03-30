

const MenuItem = ({ menuItem, orderMenuItem, index }) => {
  

  return(
    <>
      <h4>{menuItem.name}</h4>
      {/* conditional rendering --> if the condition on the left-side is true then display the html on the right-side */}
      {menuItem.ordered && <h5>Ordered!</h5>}
      {/* use an anonymous function to stop immediately invoked function */}
      <button onClick={()=>{orderMenuItem(index)}}>
        Order
      </button>
    </>
  )
}

export default MenuItem