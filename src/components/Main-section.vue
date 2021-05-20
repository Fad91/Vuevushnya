<template>
  <div class="main-section container is-fullhd">
    <div class="columns">
      <div class="column">
        <h2>Lorem, ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="column">
        <h2>Lorem, ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="column">
        <h2>Lorem, ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <Portfolio/>
  </div>
</template>

<script>

import Portfolio from "./Portfolio";

export default {
    name: "MainSection",
    components: {
        Portfolio
    }
}

</script>

<style lang="scss">
.main-section {
  background: url("../assets/img/drums-background.jpg") no-repeat;
  color: #cac9c9;
}

.column h2 {
  font-size: 36px;
  line-height: 46px;
  text-align: center;
  letter-spacing: 2px;
  margin: 25px 0 50px 0;
}

.column p {
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 2px;
  padding: 10px 30px 20px 30px;
}
</style>
