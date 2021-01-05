import React, { PureComponent } from 'react'
// import connect from '@/utils/connect';
import { connect } from 'react-redux';
import { addAction } from '@/store/actionCreators';
class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.props.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.addCounter(5)}>+5</button>
      </div>
    )
  }
  increment() {
    this.props.addNumber(1);
  }
  addCounter() {
    this.props.addNumber(5);
  }
}
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addNumber: function(number) {
      dispatch(addAction(number))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);