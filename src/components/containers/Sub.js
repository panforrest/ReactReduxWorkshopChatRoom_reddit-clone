import React, { Component } from 'react'

class Sub extends Component {
    constructor(){
    	super()
    	this.state = {
    		posts: [
    		    {title:'iPhone X Released!', text:'check out the new iPhone X'},
    		    {title:'Elon Musk Elected President', text:'Beat Trump by 90%'},
    		    {title:'Elone Musk !', text:'check out the new iPhone X'},
    		    {title:'iPhone X Released!', text:'check out the new iPhone X'},
    		    {title:'iPhone X Released!', text:'check out the new iPhone X'},
    		]
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
	                <input type="text" placeholder="Title" className="form-control" /><br />
	                <textarea placeholder="Title" className="form-control"></textarea><br />
	                <button>Submit</button>
	            </div>

            </div>
          </div>
	    )
	}
}

export default Sub