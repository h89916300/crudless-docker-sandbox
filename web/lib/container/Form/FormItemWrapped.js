function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Render } from 'zero-element/lib/config/formItemType';
import "./index.css";
export default function FormItemWrapped({
  type,
  options,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Render, _extends({
    n: type,
    options: options
  }, rest));
}