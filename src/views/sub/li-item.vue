<template>
    <li class='item'>
   
      <input type="checkbox" class='mr-1' v-model="val">
       <span class='mr-auto' :class='{line: val}'>{{todo.todo}}</span>
     
        <i class="fas fa-trash-alt" @click='$emit("remove")' title="В корзину"></i>
      </li>
</template>


<script>
export default {
    name: 'liItem',
  data(){
    return {
    val: false
    }
  },
  props: ['todo'],
}

</script>
