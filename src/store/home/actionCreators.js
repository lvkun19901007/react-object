import { 
  CHANGE_BANNER,
  CHANGE_RECOMMEND,
  FETCH_HOME_MULTIDATA
} from './constants';
import axios from 'axios';
const changeBannersAction = (banners) => ({
  type: CHANGE_BANNER,
  banners
});
const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMEND,
  recommends
});

// redux-thunk中定义的action
const getHomeMultidataAction = () => {
  return (dispatch) => {
    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      const data = res.data.data;
      dispatch(changeBannersAction(data.banner.list));
      dispatch(changeRecommendsAction(data.recommend.list));
    });
  }
}

// redux-saga拦截的action
const fecthHomeMulitidataAction = {
  type: FETCH_HOME_MULTIDATA
}

export { 
  changeBannersAction, 
  changeRecommendsAction,
  getHomeMultidataAction, 
  fecthHomeMulitidataAction 
};