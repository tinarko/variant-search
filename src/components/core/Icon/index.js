import React from 'react';
import icons from './icons';
import _ from 'lodash/fp';

function Icon({ name = '', color = 'currentColor', ...props }) {
  const icon = _.find(['name', name], icons);

  return icon ? (
    React.createElement(React.Fragment, {}, icon.svg({ ...props, color }))
  ) : (
    <div />
  );
}

export default Icon;
