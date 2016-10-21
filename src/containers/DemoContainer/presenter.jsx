import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DemoContainer from './index';
import * as actions from '../../actions';

export default connect(
  null,
  (dispatch) => {
    return { loadDemos: bindActionCreators(actions.loadDemos, dispatch) };
  }
)(DemoContainer);
