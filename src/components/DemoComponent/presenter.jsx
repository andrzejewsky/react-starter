import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DemoComponent from './index';
import * as actions from '../../actions';

export default connect(
  (state) => {
    return { demos: state.demos }
  },
  (dispatch) => {
    return { handleClick: bindActionCreators(actions.clickElement, dispatch) }
  }
)(DemoComponent);
