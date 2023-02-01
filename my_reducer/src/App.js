import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { incNumber ,decNumber} from './actions/action'


function App() {

  const myState = useSelector((state)=>state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <>
      <div className='container text-center'>

          <h1 > Increment/Decrement Counter</h1>
          <h4> using React and Redux </h4>

          <div className='quantity'>
            <a className='quantity__minus' title='Decrement' onClick = {()=>dispatch(decNumber())}>
              <button type="button" class="btn btn-secondary"> - </button>
            </a>
            
            <input name='quantity' type='text' className='quantity__input' value={myState}/>
            
            <a className='quantity__plus' title='Increment' onClick = {()=>dispatch(incNumber())}>
              <button type="button" class="btn btn-secondary"> + </button>
            </a>
          </div>
      </div>
    
    </>
    
  )
}

export default App

