/* eslint-env browser */
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YMInitializer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _init = _interopRequireDefault(require("./init"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var YMInitializer = /*#__PURE__*/function (_Component) {
  _inherits(YMInitializer, _Component);

  function YMInitializer() {
    _classCallCheck(this, YMInitializer);

    return _possibleConstructorReturn(this, _getPrototypeOf(YMInitializer).apply(this, arguments));
  }

  _createClass(YMInitializer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _init["default"])(this.props.accounts, this.props.options, this.props.version);
      var el = document.createElement('script');
      var attrs = this.props.attrs;
      el.type = 'text/javascript';
      el.async = true;
      el.src = (0, _constants.scriptPath)(this.props.version);
      Object.keys(attrs).map(function (i) {
        if (el.__proto__.hasOwnProperty(i)) {
          el.setAttribute(i, attrs[i]);
        }
      });
      this.insertPoint.insertBefore(el, null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var setInsertPoint = function setInsertPoint(element) {
        _this.insertPoint = element;
      };

      return _react["default"].createElement(this.props.containerElement, {
        ref: setInsertPoint
      }, this.props.children);
    }
  }]);

  return YMInitializer;
}(_react.Component);

exports.YMInitializer = YMInitializer;
YMInitializer.displayName = 'YMInitializer';
YMInitializer.propTypes = {
  accounts: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  containerElement: _propTypes["default"].string,
  options: _propTypes["default"].object,
  attrs: _propTypes["default"].object,
  version: _propTypes["default"].oneOf(['1', '2'])
};
YMInitializer.defaultProps = {
  containerElement: 'div',
  options: {},
  attrs: {},
  version: '1'
};