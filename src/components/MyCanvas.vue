<script setup>
import { onActivated, onDeactivated, onMounted, ref } from 'vue'
import {useRouter} from 'vue-router'

let router = useRouter()
let nowRoute = router.currentRoute
let nowCanvas = nowRoute.value.params.id
console.log(nowCanvas)

onMounted(() => {
  var canvas = document.getElementById('tutorial');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    if(nowCanvas=='exp-A'){
      ctx.fillStyle = "rgb(200,0,0)";
    }else{
      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    }
    ctx.fillRect(30, 30, 55, 50);
  }
})
onActivated(()=>{
  console.log('激活啦',nowRoute)
})
onDeactivated(()=>{
  console.log('出去啦',nowRoute)
})

</script>

<template>
  <h1>{{nowRoute.params.id}}</h1>
  <canvas id="tutorial" width="150" height="150"></canvas>
</template>

<style scoped>
</style>
