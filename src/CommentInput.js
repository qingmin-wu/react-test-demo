import React, { Component } from 'react';

class CommentInput extends Component {
    constructor() {
      super();
      this.state = {
        username: '',
        content: ''
      }
    }
    handleUsernameChange(event) {
      this.setState({
        username: event.target.value
      })
    }
    handleContentChange(event) {
      this.setState({
        content: event.target.value
      })
    }
    handleSubmit(event) {
      if(this.props.onSubmit) {
        const {username, content} = this.state;
        this.props.onSubmit({username, content});
      }
      this.setState({
        content: ''
      })
    }

    render () {
        return (
          <div className='comment-input'>
            <div className='comment-field'>
              <span className='comment-field-name'>用户名：</span>
              <div className='comment-field-input'>
                <input className='comment-field-input-input' 
                      value={this.state.username} 
                      onChange = {this.handleUsernameChange.bind(this)} / >
              </div>
            </div>
            <div className='comment-field'>
              <span className='comment-field-name'>评论内容：</span>
              <div className="comment-for-nothing">
                <textarea className='comment-field-textarea' 
                  value={this.state.content} 
                  onChange={this.handleContentChange.bind(this)}
                />
              </div>
            </div>
            <div>
              <button className='comment-field-button' 
                onClick={this.handleSubmit.bind(this)}
              >
                发 布
              </button>
            </div>
          </div>
        )
      }

}


export default CommentInput;