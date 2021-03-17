"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    prev: 3,
    color: "blue",
    todos: [{
      todo: 'Купить хлеб',
      priority: 1,
      deleted: false,
      id: 1
    }, {
      todo: 'Посадить дерево',
      priority: 2,
      deleted: false,
      id: 2
    }, {
      todo: 'Построить дом',
      priority: 2,
      deleted: false,
      id: 3
    }, {
      todo: 'Позвонить Глебу',
      priority: 3,
      deleted: true,
      id: 4
    }]
  },
  mutations: {
    push: function push(state, todo, priority) {
      var obj = {
        todo: todo,
        priority: priority,
        deleted: false,
        id: function id() {
          state.prev++;
          return state.prev;
        }
      };
      state.todos.push(obj);
    },
    change: function change(state, newColor) {
      state.color = newColor;
      alert(state.color);
    }
  },
  actions: {},
  modules: {}
});

exports["default"] = _default;