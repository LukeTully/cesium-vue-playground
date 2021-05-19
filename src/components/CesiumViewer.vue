<template>
  <vc-viewer
    ref="vcViewer"
    :animation="animation"
    :baseLayerPicker="baseLayerPicker"
    :timeline="timeline"
    :fullscreenButton="fullscreenButton"
    :fullscreenElement="fullscreenElement"
    :infoBox="infoBox"
    :showCredit="showCredit"
    @ready="onViewerReady"
    @leftClick="onLeftClick"
  ></vc-viewer>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
