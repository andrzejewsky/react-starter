import React from 'react';
import DemoComponent from '../../components/DemoComponent/presenter';

class DemoContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadDemos();
  }

  render() {
    return <DemoComponent />
  }
}

DemoContainer.propTypes = {
  loadDemos: React.PropTypes.func
};

export default DemoContainer;
