import React, { useState } from 'react'
import { ChildArea } from './component/ChildArea'
import './styles.scss'

export default function App() {
  // counter state
  const [count, setCount] = useState(100)
  const [text, setText] = useState('')
  const [open, setOpen] = useState(true)

  const countUp = () => {
    setCount((prev) => count + 2)
  }

  const countDown = () => {
    setCount((prev) => count - 2)
  }

  // form change
  const onChangeInput = (e) => setText(e.target.value)

  // Open Toggle
  const onClickOpen = () => setOpen(!open)
  console.log(open)

  const data = [...Array(200).keys()]
  console.log(data)
  data.forEach(() => {
    console.log('...')
  })
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="column column-80">
            <h1>Hello Re:React</h1>
            <section className="section">
              {/* Counter */}
              <h2>{count}</h2>
              <button onClick={countUp}>countUp</button>
              <button onClick={countDown}>countDown</button>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="column column-80">
            <section className="section">
              {/* Form */}
              {text}
              <input onChange={onChangeInput} value={text} />
              <button className="button button-outline" onClick={onClickOpen}>
                View Child
              </button>
              <ChildArea open={open} />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
