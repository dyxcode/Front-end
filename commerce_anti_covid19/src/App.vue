<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/content/navbar/Navbar"

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
@import "./assets/css/base.css";

</style>
