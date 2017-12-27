// <h1>Reddit Clone!</h1>
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
// import Intro from './components/Intro'
import { Sub } from './components/containers'

const app = (
	<Provider store={store.configure(null)}>
		<Sub />
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'))