import React, {useState} from 'react'
import Counter from './counter'

const Counters = () => {
  const initialState = [
    {value: 0, id: 1, name: 'Ложка'},
    {value: 4, id: 2, name: 'Вилка'},
    {value: 2, id: 3, name: 'Тарелка'},
    {value: 1, id: 4, name: 'Стартовый набор минималиста'},
    {value: 0, id: 5, name: 'Ненужные вещи'}
  ]
  const [counters, setCounters] = useState(initialState)

  const handleDelete = (counterId) => {
    setCounters(counters.filter(counter => counter.id !== counterId))
  }

  const handleReset = () => setCounters(initialState)

  const handleIncrement = (counterId) => {
    const i = counters.findIndex(counter => counter.id === counterId)
    const newCounters = [...counters]
    newCounters[i].value++
    setCounters(newCounters)
  }

  const handleDecrement = (counterId) => {
    const i = counters.findIndex(counter => counter.id === counterId)
    if (counters[i].value <= 0) return
    const newCounters = [...counters]
    newCounters[i].value--
    setCounters(newCounters)
  }

  return (
    <div>
      <button className="btn btn-primary btn-sm2 m-2"
              onClick={handleReset}>Reset</button>
      {counters.map(counter => (
        <Counter key={counter.id}
                 {...counter}
                 onDelete={handleDelete}
                 onIncrement={handleIncrement}
                 onDecrement={handleDecrement}/>
      ))}
    </div>
  )
}

export default Counters
