import React, { Component } from 'react'
import { Preview } from '../presentation'
import { connect } from 'react-redux'

class Sub extends Component {
    constructor(){
    	super()
    	this.state = {
    		nextPost: {
    			title: '',
                text: ''
    		},
    		posts: [
    		    {title:'iPhone X Released!', text:'check out the new iPhone X'},
    		    {title:'Elon Musk Elected President', text:'Beat Trump by 90%'},
    		    {title:'Elone Musk !', text:'check out the new iPhone X'},
    		    {title:'iPhone X Released!', text:'check out the new iPhone X'},
    		    {title:'iPhone X Released!', text:'check out the new iPhone X'},
    		]
    	}
    }

    updateNextPost(attr, event){
    	console.log(attr + '==' + event.target.value)

    	// if (attr == 'title'){
    	// 	this.setState({
    	// 		title: event.target.value
    	// 	})
    	// }

    	// if (attr == 'text'){
    	// 	this.setState({
    	// 		text: event.target.value
    	// 	})
    	// }

    	let updated = Object.assign({}, this.state.nextPost)
    	updated[attr] = event.target.value
    	this.setState({
    		nextPost: updated
    	}) 
    }

    submitPost(){
        console.log('submitPost: '+JSON.stringify(this.state.nextPost))
        let updatedPosts = Object.assign([], this.state.posts)
        updatedPosts.push(this.state.nextPost)
        this.setState({
        	posts: updatedPosts
        }) 
    }

	render(){
        const posts = this.props.post.all || []

		return(
		  <div className="container">
            <div className="row">
            
	            <div className="col-md-4 col-md-offset-2">
	                <h2>Tech</h2>
	                <div>
	                    <h3>Title</h3>

                        { posts.map((post, i) => {
                            return <Preview {...post} key={i} />
                            })
                        }
                    </div>
	            </div>

                <div className="col-md-4">
	                <h3>Submit Comment</h3>
	                <input type="text" onChange={this.updateNextPost.bind(this, 'title')} placeholder="Title" className="form-control" /><br />
	                <textarea onChange={this.updateNextPost.bind(this, 'text')} placeholder="Text" className="form-control"></textarea><br />
	                <button onClick={this.submitPost.bind(this)}>Submit</button>
	            </div>

            </div>
          </div>
	    )
	}
}

const stateToProps = (state) => {
    return {
        post: state.post
    }
}

// const dispatchToProps = (dispatch) => {
//     return {
        
//     }
// }  

export default connect(stateToProps)(Sub)