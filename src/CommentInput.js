import React, { Component } from 'react';

class CommentInput extends Component {
    render () {
        return (
          <div className='comment-input'>
            <div className='comment-field'>
              <span className='comment-field-name'>用户名：</span>
              <div className='comment-field-input'>
                <input className='comment-field-input-input'/ >
              </div>
            </div>
            <div className='comment-field'>
              <span className='comment-field-name'>评论内容：</span>
              <div className="comment-for-nothing">
                <textarea className='comment-field-textarea'/>
              </div>
            </div>
            <div>
              <button className='comment-field-button'>
                发 布
              </button>
            </div>
          </div>
        )
      }

}
export default CommentInput;