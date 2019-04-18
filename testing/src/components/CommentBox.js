import React from 'react';

class CommentBox extends React.Component{
    state = {
        comment: ''
    }

    onChangeHandler = (event) => {

        this.setState({
        comment: event.target.value
        }) 

        console.log(this.state)
    }

    onSubmitHandler = (event) => {
        // ToDo
        event.preventDefault();
        this.setState({
            comment: ''
        })
    }
    render(){
        return (
            <>
            <form onSubmit ={this.onSubmitHandler}>
                <h1> Enter Comment</h1>
                <div>
                    <textarea onChange = {this.onChangeHandler} value = {this.state.comment}></textarea>
                </div>
                <div>
                    <button>Submit Comment</button>
                </div>    
            </form>
            
            </>
        )
    }    
}

export default CommentBox;