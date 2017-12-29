var initialState = {
	all: [
        {title:'iPhone X Released!', text:'check out the new iPhone X'},
	    // {title:'Elon Musk Elected President', text:'Beat Trump by 90%'},
	    // {title:'Elone Musk !', text:'check out the new iPhone X'},
	    // {title:'iPhone X Released!', text:'check out the new iPhone X'},
	    // {title:'iPhone X Released!', text:'check out the new iPhone X'}
	]
}

export default (state=initialState, action) => {
	let updated = Object.assign({}, state)
	switch(action.type){
        case 'POST_ADDED':
            console.log('POST_ADDED: '+JSON.stringify(action.data))
            return updated

		default:
		    return updated
	}
}