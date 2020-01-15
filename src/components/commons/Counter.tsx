import React from 'react'
import { observer } from 'mobx-react-lite'

import useStore from '../../utils/useStore'

import Button from './Button'

const Counter: React.FC = observer(() => {
  const {
    IndexPage: { counter },
  } = useStore()
  return (
    <div className="mt-20 flex flex-col items-center">
      <p className="font-bold text-2xl text-center">Counter</p>
      <p style={{ fontVariant: 'tabular-nums' }} className="font-bold text-2xl text-center">
        {counter.count}
      </p>
      <div className="mt-2 flex-row">
        <Button label="-" onClick={counter.decrement} />
        <Button className="ml-2" label="+" onClick={counter.increment} />
      </div>
    </div>
  )
})

export default Counter
