
import React, { PureComponent } from 'react';
import Home from '@/view/home/Home';
import Profile from '@/view/home/Profile';
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    )
  }
}
