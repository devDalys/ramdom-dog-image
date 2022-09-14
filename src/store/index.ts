import { dogReducer } from '../reducers/dogReducer';
import {createStore,applyMiddleware } from 'redux'

import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
	dogs: dogReducer
});

export type rootType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))