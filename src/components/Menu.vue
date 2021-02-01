<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-brand href="http://192.168.1.133:8080/#/home">RALLYE FESTIVAL HOZNAYO</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-container>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item class="nav-link" to="/home" exact>Inicio</b-nav-item>
            <b-nav-item class="nav-link" to="/otrapagina">Fecha</b-nav-item>
            <b-nav-item class="nav-link" to="/addpersonas">Inscribete</b-nav-item>
            <b-nav-item class="nav-link" to="/about">Info</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
  </b-navbar>
</template>



<script>
export default {
  name: 'Menu'
}
</script>


<style scoped>
.router-link-exact-active, .router-link-active {
  background-color: rgb(250, 250, 250);
}
</style>