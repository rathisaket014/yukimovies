import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='text-4xl font-semibold text-center p-5'>
      <Card title="Star Wars" />
      <Card title="John Wick" />
      <Card title="Harry Potter" />
    </div>
  )
}

export default App