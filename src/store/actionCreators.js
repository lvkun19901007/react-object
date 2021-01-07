import { 
  ADD_NUMBER, 
  SUB_NUMBER,
  CHANGE_BANNER,
  CHANGE_RECOMMEND
} from './constants';
import axios from 'axios'
const addAction = (count) => ({
  type: ADD_NUMBER,
  num: count
});
const subAction = (count) => ({
  type: SUB_NUMBER,
  num: count
});
const changeBannersAction = (banners) => ({
  type: CHANGE_BANNER,
  banners
});
const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMEND,
  recommends
});
const getHomeMultidataAction = () => {
  return (dispatch) => {
    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      const data = res.data.data;
      dispatch(changeBannersAction(data.banner.list));
      dispatch(changeRecommendsAction(data.recommend.list));
    });
  }
}
export { addAction, subAction, getHomeMultidataAction };