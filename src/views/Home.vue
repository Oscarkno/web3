<template>
<div id="home">
    <br><h2><strong>¡Pilotos confirmados!</strong></h2>
    <br><Slider />
    <br><h5><strong>Video: Edición 2019</strong></h5>
    <iframe media="(max-width:400px)" src="https://www.youtube.com/embed/1snDDBRqp-Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <br><br><img src = "../img/patrocinadors.png" width="100%"> <br><br>
 </div>
</template>

<script>
import Slider from '../components/Slider' 



export default {
   name: 'Home',
   components: {
        Slider
  }
}
</script>

