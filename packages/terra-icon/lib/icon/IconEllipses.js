'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('../IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIcon = function SvgIcon(customProps) {
  var attributes = _extends({}, customProps);

  return _react2.default.createElement(
    _IconBase2.default,
    attributes,
    _react2.default.createElement('path', { d: 'M24 18.6a5.4 5.4 0 1 1-5.4 5.4 5.38 5.38 0 0 1 5.4-5.4zm18.6 0a5.4 5.4 0 1 1-5.4 5.4 5.38 5.38 0 0 1 5.4-5.4zm-37.2 0A5.4 5.4 0 1 1 0 24a5.38 5.38 0 0 1 5.4-5.4z' })
  );
};

SvgIcon.displayName = "IconEllipses";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "data-name": "Layer 1" };

exports.default = SvgIcon;
/* eslint-enable */