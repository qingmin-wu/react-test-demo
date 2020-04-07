import React, { Component } from 'react';

class Comment extends Component {
    constructor() {
        super();
        this.state = {timeString: ''};
    }
    componentWillMount() {
        this._updateTimeString();
        this._timer = setInterval(this._updateTimeString.bind(this), 5000)
    }
    componentWillUnmount() {
        clearInterval(this._timer);
    }
    _updateTimeString() {
        const comment = this.props.comment;
        const duration = (+Date.now() - comment.createdTime) / 1000;
        this.setState({
            timeString: duration > 60 ? `${Math.round(duration / 60)}分钟前` : `${Math.round(Math.max(duration, 1))}秒前`
        })
    }
    handleDeleteComment() {
        if(this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }

    render () {
        return (
        <div className='comment' style={{overflow: "hidden",background: "pink",marginTop: "5px"}}>
            <div className='comment-user' style={{color: "gray"}}>
                <span style={{fontWeight: "bold"}}>{this.props.comment.username} </span>： <span>{this.props.comment.content}</span>
            </div>
            <div>
                <span style={{
                    float: "left"
                }}>
                    {this.state.timeString}
                </span>
                <span 
                    onClick={this.handleDeleteComment.bind(this)}
                    style={{
                    float: "right",
                    color: "green"
                }}>
                    删除
                </span>
            </div>
            
            
        </div>
        )
    }
}

export default Comment