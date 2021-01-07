import { 
  CHANGE_BANNER,
  CHANGE_RECOMMEND
} from './constants';

const initialHome = {
  banners: [],
  recommends: []
};
function homeReducer(state = initialHome, action) {
  switch(action.type) {
    case CHANGE_BANNER:
      return {...state, banners: action.banners};
    case CHANGE_RECOMMEND:
      return {...state, recommends: action.recommends};
    default:
      return state;
  }
}

export default homeReducer;