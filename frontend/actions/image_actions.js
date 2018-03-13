import * as APIUtil from '../util/image_api_util';

export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
export const RECEIVE_IMAGE_ERRORS = "RECEIVE_IMAGE_ERRORS";
export const DESTROY_IMAGE = "DESTROY_IMAGE";

const receiveImage = (image) => {
  return {
    type: RECEIVE_IMAGE,
    image
  };
};

const receiveImages = (images) => {
  currentImage
  return {
    type: RECEIVE_IMAGES,
    images
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_IMAGE_ERRORS,
    errors
  };
};

const destroyImage = (id) => {
  return {
    type: DESTROY_IMAGE,
    id
  };
};

export const deleteImage = (id) => (dispatch) => {
  return APIUtil.deleteImage(id).then(image => dispatch(destroyImage(id)));
};

export const createImage = (image) => (dispatch) => {
  return APIUtil.createImage(image).then(image => {
    dispatch(receiveImage(image));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};

export const fetchImage = (id) => (dispatch) => {
  return APIUtil.showImage(id).then(image => {
    dispatch(receiveImage(image));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};

export const fetchImages = (filter) => (dispatch) => {
  return APIUtil.fetchImages(filter).then(images => {
    dispatch(receiveImages(images));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};
