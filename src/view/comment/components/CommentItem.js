import React, { PureComponent } from 'react'
import { Comment, Tooltip, Avatar } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
export default class CommentItem extends PureComponent {
  render() {
    const { comment } = this.props;
    return (
      <div>
        <Comment
          actions={this.getActions()}
          author={<a href="/#">{comment.name}</a>}
          avatar={
            <Avatar
              src={comment.avatar}
              alt={comment.name}
            />
          }
          content={
            <p>
              {comment.content}
            </p>
          }
          datetime={
            <Tooltip title={comment.datetime.format('YYYY-MM-DD HH:mm:ss')}>
              <span>{comment.datetime.fromNow()}</span>
            </Tooltip>
          } />
      </div>
    )
  }
  getActions() {
    return [
      <span onClick={this.props.removeItem}><DeleteOutlined /> 删除</span>
    ]
  }
}
