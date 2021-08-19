import React, {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const formCount = (count) => {
    return count === 0 ? 'Ноль' : count
  }

  const getBadgeClasses = () => {
    let classes = 'badge m-2 bg-'
    classes += count === 0 ? 'danger' : 'primary'
    return classes
  }

  const handleIncrement = (productId) => {
    setCount(count + 1)
  }

  const handleDecrement = (productId) => {
    if (count <= 0) return
    setCount(count - 1)
  }

  return (
    <>
      <span className={getBadgeClasses()}>{formCount(count)}</span>
      <button onClick={() => handleIncrement({id: 1})} className="btn btn-secondary btn-sm m-2">Increment</button>
      <button onClick={() => handleDecrement({id: 1})} className="btn btn-secondary btn-sm m-2">Decrement</button>
    </>
  )
}

export default Counter