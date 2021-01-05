import React, { PureComponent } from 'react';
import { Input, Button } from 'antd';
import moment from 'moment';
export default class CommentInput  extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  onSubmit() {
    const commetInfo = {
      id: Date.now(),
      name: 'codewhy',
      avatar: "https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
      content: this.state.value,
      datetime: moment()
    };
    this.props.submitComment(commetInfo);
    this.setState({
      value: ''
    });
  }
  render() {
    return (
      <div>
        <Input.TextArea rows={4} value={this.state.value} onChange={this.onChange.bind(this)} />
        <Button type="primary" onClick={this.onSubmit.bind(this)} style={{marginTop: '10px'}}>添加评论</Button>
      </div>
    )
  }
}
