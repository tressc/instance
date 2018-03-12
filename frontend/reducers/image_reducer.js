import { RECEIVE_IMAGE, RECEIVE_IMAGES, REMOVE_IMAGE } from '../actions/image_actions';
import { merge } from 'lodash';

const imageReducer = (state = { images: {} }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_IMAGES:
      return merge({}, state, action.images);
    case RECEIVE_IMAGE:
      return merge({}, {[action.image.id]: action.image});
    case REMOVE_IMAGE:
      return {};
    default:
      return state;
  }
};

export default imageReducer;
