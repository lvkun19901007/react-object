import React, { PureComponent } from 'react';

// import connect from '@/utils/connect';
import { connect } from 'react-redux';
import { subAction } from '@/store/actionCreators';
class Profile extends PureComponent {
  render() {
    return (
      <div>
        <hr />
        <h1>Profile</h1>
        <h2>当前计数: {this.props.counter}</h2>
        <button onClick={e => this.decrement()}>-1</button>
        <button onClick={e => this.subCounter()}>-5</button>
        <h1>Banners</h1>
        <ul>
          {
            this.props.banners.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
        <h1>Recommends</h1>
        <ul>
          {
            this.props.recommends.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
  decrement() {
    this.props.subNumber(1);
  }
  subCounter() {
    this.props.subNumber(5);
  }
}
const mapStateToProps = state => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends
  };
};
const mapDispatchToProps = dispatch => {
  return {
    subNumber: function(number) {
      dispatch(subAction(number))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);