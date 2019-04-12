import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard";
import Article_1 from "./views/articles/github_deploy";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path:"/deploy-to-github-pages",
      name: 'Deploy to GitHub Pages',
      component: Article_1
    }
  ]
});
