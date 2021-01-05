import React, { PureComponent } from 'react'

import './CardTransition.css';

import { CSSTransition } from 'react-transition-group';
import { Card, Avatar, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default class CardTransition extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShowCard: true
    };
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={e => this.setState({isShowCard: !this.state.isShowCard})}>{this.state.isShowCard?'隐藏卡片':'显示卡片'}</Button>
        <CSSTransition 
          in={this.state.isShowCard}
          classNames="card"
          timeout={1000}
          unmountOnExit={true}
          onEnter={el => console.log('进入动画前')}
          onEntering={el => console.log('进入动画')}
          onEntered={el => console.log('进入动画后')}
          onExit={el => console.log('退出动画前')}
          onExiting={el => console.log('退出动画')}
          onExited={el => console.log('退出动画后')}>
          <Card
            style={{width: 300}}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />
            ]}>
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
              />
          </Card>
        </CSSTransition>
      </div>
    )
  }
}