import React from 'react';

function DemoComponent({ demos = [], handleClick }) {
  return <ul>
    {
      demos.map((demo, key) => {
        return <li key={key} onClick={() => handleClick(key)}>{demo}</li>
      })
    }
  </ul>;
}

DemoComponent.propTypes = {
  demos: React.PropTypes.array,
  handleClick: React.PropTypes.func,
};

export default DemoComponent;
