<template>
    <li class='item'>
   
      <input type="checkbox" class='mr-1' v-model="val">
       <span class='mr-auto' :class='{line: val}'>{{todo.todo}}</span>
        <i class="fas fa-undo-alt changeColor mr-2" @click='$emit("back")' title="Восстановить"></i>
        <i class="fas fa-trash-alt" @click='$emit("remove")' title="Удалить окончательно"></i>
      </li>
</template>


<script>
export default {
    name: 'liItemDel',
  data(){
    return {
    val: false
    }
  },
  props: ['todo'],
}

</script>
