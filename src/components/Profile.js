import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Profile.css"
import "../App.css"

function Profile() {
  const dispatch = useDispatch();
  const { name, age, joke } = useSelector((state) => state)
  return (
    <div className='container'>
      <h1>I'm {name}</h1><br/>
      <h2>MY AGE IS: {age} YRS</h2><br/>
      <h5>{joke}</h5>
      <button className='zoom btn mx-5' onClick={() => dispatch({ type: 'UPDATE_NAME' })}>Update Name</button>
      <button className='zoom btn mx-5' onClick={() => dispatch({ type: 'UPDATE_AGE' })}>Update Age</button>
      <button className='zoom btn mx-5' onClick={() => dispatch({ type: 'GET_JOKE' })}>Fetch Joke</button>
    </div>
  )
}

export default Profile;