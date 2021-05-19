import { createApp } from 'vue';
import App from './App.vue';
import VueCesium from "vue-cesium";

const app = createApp(App).use(VueCesium, {
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5YWJjMmJiZS0yYzgxLTQwYzMtOGYxZS05ODhiZGQzZDg0MGIiLCJpZCI6NTYzNzAsImlhdCI6MTYyMTQxOTI3NX0._jxAUAQTUy-nWrorVmtj2D35_s09y0WfuqTGefNubiA"
});
app.mount('#app');
