<template>
  <div id="app">
    <Navbar/>
    <IntroSection/>
    <MainSection/>
    <Prices/>
    <Footer/>
  </div>
</template>

<script>

import Navbar from "./components/Navbar"
import IntroSection from "./components/Intro-section"
import MainSection from "./components/Main-section"
import Prices from "./components/Prices"
import Footer from "./components/Footer"

export default {
  name: 'App',
  components: {
    Navbar, IntroSection, MainSection, Prices, Footer
  }
}
</script>

<style lang="scss">

@import "assets/scss/_style.scss";

#app {
  font-family: "DinPro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $black;
}

</style>
