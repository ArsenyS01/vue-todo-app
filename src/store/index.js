import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prev: 3,
    color: "blue",
    todos:[
        {todo:'Купить хлеб', priority: 1, deleted: false, id: 1 },
          {todo:'Посадить дерево', priority: 2, deleted: false, id: 2 },
        {todo:'Построить дом', priority: 2, deleted: false, id: 3 },
        {todo:'Позвонить Глебу', priority: 3, deleted: true, id: 4 }
    ]
  },
  mutations: {
    push(state, todo, priority){
      let obj = {
        todo, priority, deleted: false,
        id: () => 
        { state.prev++          
          return state.prev }
      }
      state.todos.push(obj)
    },
    change(state, newColor){
      state.color = newColor
      alert(state.color)
    }
  },
  actions: {
  },
  modules: {
  }
})
