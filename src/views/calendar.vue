<template>
  
<div class="main calendar">
  <!-- <div class="days">
    <div class="num active">1</div>
    <div class="num">2</div>
    <div class="num">3</div>
    <div class="num">4</div>
    <div class="num">5</div>
    <div class="num">6</div>
    <div class="num">7</div>
      </div> -->
    <div class="inner b">
  <ul class="pbox">
    <li
    is='liItem'
    v-for="todo in todos" 
    :todo='todo'
    :key='todo.id'
    @remove="rem(todo.id)"
    ></li>
  </ul>
  
  <div class="plus" @click='push()'>
    +
  </div>

  </div>

</div>

</template>



<script>

import liItem from "./sub/li-item.vue"

export default {
    name: 'calendar',
    components:{
      liItem
    },
  computed: {
    allTodos(){
      return this.$store.state.todos
    },
    todos(){
      return this.$store.state.todos.filter(todo => todo.deleted !== true)
    }
  },
  methods:{
    rem(id){
      this.$store.state.todos.find(todo => todo.id == id).deleted = true
    },
    push(){
      let aim = prompt('Новая задача:', '')
      let priority = ( prompt('Приоритет задачи от 1 до 3:', '') || 1 ) 
        if(!aim || !priority) return false
      this.$store.commit('push', aim, priority);
    }
  }
}

</script>
