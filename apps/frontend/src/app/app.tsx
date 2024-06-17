// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { addNum } from '@common/lib'
import NxWelcome from '@frontend/app/nx-welcome'
import React from 'react'

export function App() {
  const [sum, setSum] = React.useState(0)

  return (
    <div>
      <button
        onClick={() => {
          setSum((prev) => addNum(prev, 2))
        }}
      >
        +2
      </button>
      {sum}
      <NxWelcome title='frontend' />
    </div>
  )
}

export default App
