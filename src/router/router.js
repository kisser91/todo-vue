import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/views/Home.vue";
import Board from "../components/views/Board.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/board/:id", name:'board', component: Board, props: true },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;