
import React from 'react'


import {useSelector, useDispatch} from 'react-redux'
import { decrease, increase, increaseBy } from '../modules/counter'
import Counter from '../Componets/counter'
import { Rootstate } from '../modules'


function CounterContainer(){
 const count = useSelector((state: Rootstate) => state.counter.count)
 const dispatch = useDispatch()

 const onIncrease = ()=>{
     dispatch(increase())
 }

 const onDecrease = ()=>{
     dispatch(decrease())

 
 } 
 
 const onIncreaseBy = (diff: number) =>{
    dispatch(increaseBy(diff))
 }

  return (
      <Counter count= {count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
      />
   )
}

export default CounterContainer