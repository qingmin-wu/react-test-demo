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
    componentWillMount() {
        this._loadComments();
    }
    handleSubmitComment(comment) {
        if(!comment.content) return alert('请输入内容');
        if(!comment.username) return alert('请输入姓名');
        const comments = this.state.comments;
        comments.push(comment)
        this.setState({
            comments
        })
        this._saveComments(comments)
    }
    _loadComments() {
        let comments = localStorage.getItem('comments');
        if(comments) {
            comments = JSON.parse(comments);
            this.setState({comments})
        }
    }
    _saveComments(comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
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