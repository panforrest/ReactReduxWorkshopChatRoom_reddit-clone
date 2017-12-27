import React, { Component } from 'react'

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

    	if (attr == 'title'){
    		this.setState({
    			title: event.target.value
    		})
    	}

    	if (attr == 'text'){
    		this.setState({
    			text: event.target.value
    		})
    	}
    }

	render(){
		return(
		  <div className="container">
            <div className="row">
            
	            <div className="col-md-4 col-md-offset-2">
	                <h2>Tech</h2>
	                <div>
	                    <h3>Title</h3>

                        { this.state.posts.map((post, i) => {
                            return (
                            	<li key={i}>
                                    <h3> {post.title} </h3>
                                    <p>{post.text}</p>
                            	</li>
                                )
                            })
                        }
                    </div>
	            </div>

                <div className="col-md-4">
	                <h3>Submit Comment</h3>
	                <input type="text" onChange={this.updateNextPost.bind(this, 'title')} placeholder="Title" className="form-control" /><br />
	                <textarea onChange={this.updateNextPost.bind(this, 'text')} placeholder="Text" className="form-control"></textarea><br />
	                <button>Submit</button>
	            </div>

            </div>
          </div>
	    )
	}
}

export default Sub