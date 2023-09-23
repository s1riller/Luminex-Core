import { createApp } from "vue";
import App from "./App";
import components from "@/components/UI";
import router from "@/router/router";
import directive from "@/directives/index";

const app = createApp(App);
// Регистрация компонентов
components.forEach((component) => {
  app.component(component.name, component);
});
directive.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router).mount("#app");
