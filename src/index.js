import React from 'react';
import ReactDOM from 'react-dom';
// import { StoreContext } from './utils/context';
import { Provider } from 'react-redux';
import store from './store';
import 'moment/locale/zh-cn';
import App from './App';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
