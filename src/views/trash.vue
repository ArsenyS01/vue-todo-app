<template>
  
<div class="main trash">
  <div class="f">
  <div class="inner pbox b">
  <ul>
    <li
    is='liItemDel'
    v-for="todo in delTodos" 
    :todo='todo'
    :key='todo.id'
    @remove="rem(todo.id)"
    @back='back(todo.id)'
    ></li>
  </ul>
  </div>
</div>
</div>

</template>

<script>

import liItemDel from "./sub/li-item-del.vue"

export default {
  name: 'trash',
    components:{
      liItemDel
    },
  computed:{
    delTodos(){
      return this.$store.state.todos.filter(todo => todo.deleted == true)
    }
  },
  methods:{
    rem(id){
      let fin = confirm('Вы уверены, что хотите удалить задачу окончательно?')
      if(fin){
      this.$store.state.todos = this.$store.state.todos.filter(n => n.id !== id)
      }
    },
    back(id){
      this.$store.state.todos.find(todo => todo.id == id).deleted = false
    }
  }
}

</script>
