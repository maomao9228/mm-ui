import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

console.log(router);
router.beforeEach((to, from, next) => {
  if (to.name === "Home" && !sessionStorage.getItem("about")) {
    sessionStorage.setItem("about", true);
    next("./About");
  } else {
    next();
  }
  console.log(next);
});

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
