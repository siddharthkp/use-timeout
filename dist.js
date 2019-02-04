"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function useTimeout(callback, delay) {
  var savedCallback = (0, _react.useRef)(); // Remember the latest callback.

  (0, _react.useEffect)(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  (0, _react.useEffect)(function () {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      var id = setTimeout(tick, delay);
      return function () {
        return clearTimeout(id);
      };
    }
  }, [delay]);
}

var _default = useTimeout;
exports.default = _default;
