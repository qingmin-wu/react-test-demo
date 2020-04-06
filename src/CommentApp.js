import React,{ Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommnetList';


class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }
    handleSubmitComment(comment) {
        if(!comment.content) return alert('请输入内容');
        if(!comment.username) return alert('请输入姓名')
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
    }
    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp;