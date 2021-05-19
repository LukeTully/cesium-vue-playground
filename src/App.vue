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
    :imageryProvider="imageryProvider"
  >
    <vc-provider-terrain-cesium ref="provider"></vc-provider-terrain-cesium>
  </vc-viewer>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  name: 'App',
  setup() {
    const loading = ref(true);
    const vcViewer = ref(null);
    const imageryProvider = ref(null);
    const provider = ref(null)

    const unload = () => {
      provider.value.unload();
    };
    const reload = () => {
      provider.value.reload();
    };
    const load = () => {
      provider.value.load();
    };
    return {
      loading,
      vcViewer,
      imageryProvider,
      provider,
      unload,
      reload,
      load,
      onViewerReady({ Cesium, viewer }) {
        loading.value = false

        imageryProvider.value = new Cesium.ArcGisMapServerImageryProvider({
          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
        });
        // Load OpenStreetMap Building data
        const osmBuildingsTileset = Cesium.createOsmBuildings();
        viewer.scene.primitives.add(osmBuildingsTileset);
        viewer.scene.camera.setView({
          destination: Cesium.Cartesian3.fromDegrees(-97.167541, 49.87307, 370),
          orientation: {
            heading: Cesium.Math.toRadians(10),
            pitch: Cesium.Math.toRadians(-10),
          },
        });

      },
      onNavigationEvt(e) {
        console.log(e)
      },
      onEntityClick(e) {
        console.log(e)
      },
      onLeftClick(e) {
        console.log(e)
      },

      load() {
        vcViewer.load().then(e => {
          console.log(e)
          loading.value = false
        })
      },
      unload() {
        vcViewer.unload().then(e => {
          console.log(e)
          loading.value = true
        })
      },
      reload() {
        loading.value = true
        vcViewer.reload().then(e => {
          console.log(e)
          loading.value = false
        })
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
