<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    document.getElementById('app').style.height=document.documentElement.clientHeight+'px'
    document.getElementById('app').style.width=document.documentElement.clientWidth+'px'

    // console.log(document.documentElement.clientHeight)
    // console.log(document.documentElement.clientWidth)
  }
}
</script>

<style>
*{
    margin: 0px;
    padding: 0px;
}
/* #app{
    display: flex;
    flex-direction: column;
    justify-content: center
} */
</style>
