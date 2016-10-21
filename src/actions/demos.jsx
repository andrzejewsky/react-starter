import * as actionTypes from '../constants/actionTypes';

export function startLoadDemos() {
  return {
    type: actionTypes.START_LOAD_DEMOS
  }
}

export function loadDemosCompleted(demos) {
  return {
    type: actionTypes.LOAD_DEMOS_COMPLETED,
    demos
  }
}

export function clickElement(element) {
  return {
    type: actionTypes.CLICK_ELEMENT,
    element
  }
}

export function loadDemos() {
  return (dispatch) => {
      dispatch(startLoadDemos());

      fetch('/demos.json', { credentials: 'same-origin' })
          .then((response) => response.json())
          .then((body) => { dispatch(loadDemosCompleted(body)) });
  };
}
