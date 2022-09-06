import { useState } from 'react'
import Rating from './Rating'
import ThankYou from './ThankYou'

function App() {
  const [submit, setSubmit] = useState(false)
  const [number, setNumber] = useState()

  const handleSubmit = () => setSubmit(true)

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      {!submit ? (
        <Rating handleSubmit={handleSubmit} setNumber={setNumber} />
      ) : (
        <ThankYou number={number} />
      )}
    </div>
  )
}

export default App
