import { createApp } from "vue";
import App from './App';
import './app.css'
import './assets/tailwind.css'
import components from './components/UI'
import router from "./router/router";
import store from "./store/index";
import VIntersection from "./directives/VIntersection";
import directives from "./directives";

const app = createApp(App);

components.forEach(component =>{
    app.component(component.name, component)
})

directives.forEach(directive =>{
    app.directive(directive.name, directive)
})

app
    .use(router)
    .use(store)
    .mount('#app');