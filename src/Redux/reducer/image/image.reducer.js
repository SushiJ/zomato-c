import { GET_IMAGE } from "./image.type.js";

const initialState = {
  images: [],
};

const ImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE:
      return {
        ...state,
        images: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default ImageReducer;
