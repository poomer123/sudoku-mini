import React from "react"

const Cell = (props) => {

  const handleClick = () => {
    if (!props.isInitial) {
      props.onChange(
        (props.number + 1) % 5
      )
    }
  }

  return (
    <div
      className={`cell ${props.isInitial ? "initial" : ""}`}
      onClick={() => handleClick()}
    >
      {props.number !== 0 && props.number}
    </div>
  )
}

export default Cell