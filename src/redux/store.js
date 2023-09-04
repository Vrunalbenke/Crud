import {combineReducers, applyMiddleware} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import {CrudReducer} from './reducers/CrudReducer';

const reducer = combineReducers({CrudReducer});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware),
);

export default store;
