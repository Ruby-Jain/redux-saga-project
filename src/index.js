import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import userReducer from "./reducers/userReducer"
import createSagaMiddleware from 'redux-saga'
import userSaga from './sagas/userSaga';
import rootSaga from './sagas/rootSaga';


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: userReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
