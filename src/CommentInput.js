import React, { Component } from 'react';


class CommentInput extends Component {

    constructor() {
      super();
      this.state = {
        username: '',
        content: ''
      }
    }
    componentWillMount() {
      this._loadUsername();
    }
    componentDidMount() {
      this.textarea.focus();
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
        this.props.onSubmit({
          username:this.state.username,
          content:this.state.content,
          createdTime: +new Date()});
      }
      this.setState({
        content: ''
      })
    }
    _saveUsername(username) {
      localStorage.setItem('username', username)
    }
    _loadUsername() {
      const username = localStorage.getItem('username');
      if(username) {
        this.setState({
          username
        })
      }
    }
    handleUsernameBlur(event) {
      this._saveUsername(event.target.value)
    }

    render () {
        return (
          <div className='comment-input'>
            <div className='comment-field'>
              <span className='comment-field-name'>用户名：</span>
              <div className='comment-field-input'>
                <input className='comment-field-input-input' 
                      value={this.state.username} 
                      onBlur={this.handleUsernameBlur.bind(this)}
                      onChange = {this.handleUsernameChange.bind(this)} / >
              </div>
            </div>
            <div className='comment-field'>
              <span className='comment-field-name'>评论内容：</span>
              <div className="comment-for-nothing">
                <textarea className='comment-field-textarea' 
                  ref={(textarea) => this.textarea = textarea}
                  value={this.state.content} 
                  onChange={this.handleContentChange.bind(this)}
                />
              </div>
            </div>
            <div>
              <button 
                style={{background: "skyblue"}}
                className='comment-field-button' 
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