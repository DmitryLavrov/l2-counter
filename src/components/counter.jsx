import React from 'react'

const Counter = (props) => {

  const formValue = (value) => {
    return value === 0 ? 'Ноль' : value
  }

  const getBadgeClasses = () => {
    let classes = 'badge m-2 bg-'
    classes += props.value === 0 ? 'danger' : 'primary'
    return classes
  }

  return (
    <div>
      <h4>{props.name}</h4>
      <span className={getBadgeClasses()}>{formValue(props.value)}</span>
      <button className="btn btn-secondary btn-sm m-2"
              onClick={() => props.onIncrement(props.id)}>Increment</button>
      <button className="btn btn-secondary btn-sm m-2"
              onClick={() => props.onDecrement(props.id)}>Decrement</button>
      <button className="btn btn-danger btn-sm m-2"
              onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  )
}

export default Counter
