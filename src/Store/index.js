/* eslint-disable import/no-extraneous-dependencies */
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from '../Reducer'

const middleWare = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleWare)),
)

export default store
