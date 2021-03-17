<template>
  
<div class="main sets">
  <div class="inner pbox b">
    <ul>
      <li class='item' onclick="document.getElementById('id02').style.display='block'">
     
        <i class="fas fa-cog mr-2 changeColor"></i>
        <a class='mr-auto'>Выбрать тему.</a>
       
        </li>
      <li class='item' onclick="document.getElementById('id01').style.display='block'">
     
        <i class="fas fa-volume-up mr-2 changeColor"></i>
        <a class='mr-auto'>Настройка звука.</a>
       
        </li>
    </ul>
    </div>
</div>

</template>

<script>
export default {
  name: 'sets',
}

</script>
