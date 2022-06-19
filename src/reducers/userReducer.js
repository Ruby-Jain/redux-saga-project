import { createReducer } from '@reduxjs/toolkit'
import "../App.css"

const initialState = {
    name: "RUBY JAIN",
    age: 70,
    joke:""
}

const userReducer = createReducer(initialState, (builder) => {
    builder.addCase('UPDATE_NAME_SUCCESS', (state, action) => {
        state.name = action.payload
    })
    builder.addCase('UPDATE_AGE_SUCCESS', (state, action) => {
        state.age = action.payload
    })
    builder.addCase('JOKE_SUCCESS', (state, action) => {
        state.joke = action.payload
    })
})
export default userReducer;