import * as actionTypes from '../constants/actionTypes';

export default (state = [], action) => {

  switch (action.type) {
    case actionTypes.LOAD_DEMOS_COMPLETED:
      return [...action.demos];
    case actionTypes.CLICK_ELEMENT:
      return state.filter((el, index) => { return index != action.element });
  }

  return state;
}
