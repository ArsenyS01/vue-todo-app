"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _store = _interopRequireDefault(require("./store"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;

require('./assets/css/dist/main.css');

new _vue["default"]({
  store: _store["default"],
  router: _router["default"],
  mounted: function mounted() {
    require('./assets/scripts/script.js');
  },
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');