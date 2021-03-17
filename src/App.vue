<template>
  <div id="app">
  
  
<div class="page">


  <div class="top">
    <h3 class="ml-4 logo"><img src="./assets/logo.png" alt=""> ToDo App</h3>
  </div>

  <router-view />

<footer class="row">
  <div class="icon col-4 col-sm-4 active" is='router-link' to='/'><i class="far fa-check-circle"></i></div>
  <div class="icon col-4 col-sm-4" is='router-link' to='/trash'><i class="far fa-trash-alt"></i></div>
  <div class="icon col-4 col-sm-4 changeColor" is='router-link' to='/sets'><i class="fas fa-cog"></i></div>
</footer>


<!-- The Modal -->
<div id="id01" class="modal">
  

  <!-- Modal Content -->
   
    <div class="container modal-content animate modal01">
 <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>

  <div class="sound modal-main">

    <i class="fas fa-volume-up"></i>

    <input type="range" class="form-range" id="customRange1">

  <button type="button" class="btn btn-primary" onclick="document.getElementById('id01').style.display='none'">Сохранить</button>

  </div>

    </div>

</div>


<!-- The Modal 2 -->
<div id="id02" class="modal">
  

  <!-- Modal Content 2 -->
   
    <div class="container modal-content animate modal02">
 <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>

  <div class="row themes modal-main">
    <div class="col-md-4 col-sm-4 col-12"><div class="color" style="background: #000;" data-color='#000' @click='change(this.data-color)'></div></div>
    <div class="col-md-4 col-sm-4 col-12"><div class="color" style="background: #e63946;" data-color='#e63946' @click='change(this.data-color)'></div></div>
    <div class="col-md-4 col-sm-4 col-12"><div class="color" style="background: #a8dadc;" data-color='#a8dadc' @click='change(this.data-color)'></div></div>
    <div class="col-md-4 col-sm-4 col-12"><div class="color" style="background: #457b9d;" data-color='#457b9d' @click='change(this.data-color)'></div></div>
    <div class="col-md-4 col-sm-4 col-12"><div class="color" style="background: #1d3557;" data-color='#1d3557' @click='change(this.data-color)'></div></div>
    <div class="col-md-4 col-sm-4 col-12"><div class="color" style="background: #B7245C;" data-color='#B7245C' @click='change(this.data-color)'></div></div>
    <div class="col-md-4 col-sm-4 col-12"><div class="color" style="background: #929982;" data-color='#929982' @click='change(this.data-color)'></div></div>
    <div class="col-md-4 col-sm-4 col-12"><div class="color" style="background: #606c38;" data-color='#606c38' @click='change(this.data-color)'></div></div>
    <div class="col-md-4 col-sm-4 col-12"><div class="color" style="background: #283618;" data-color='#283618' @click='change(this.data-color)'></div></div>
  </div>

    </div>

</div>


</div>

  </div>
</template>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>


<script>

import { mapMutations } from 'vuex';

export default {
  methods:{
    ...mapMutations(['change'])
  }
}
</script>