import { Button } from 'antd';
import React, { PureComponent } from 'react'
import './SwitchButton.css';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
export default class SwitchButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true
    };
  }
  render() {
    const { isOn } = this.state;
    return (
      <SwitchTransition mode="out-in">
        <CSSTransition 
          classNames="btn"
          timeout={500}
          key={isOn ? 'on' : 'off'}>
          <Button type="primary" onClick={this.btnClick.bind(this)}>
            {isOn ? 'on' : 'off'}
          </Button>
        </CSSTransition>
      </SwitchTransition>
    )
  }
  btnClick() {
    this.setState({isOn: !this.state.isOn});
  }
}
