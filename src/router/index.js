import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Document from "../views/Doucment.vue";

Vue.use(VueRouter);
// const HomeNew = () => import("../components/HomeNew.vue");
// const HomeView = () => import("../components/HomeView.vue");
const routes = [
  //路由重定向
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      title: "home"
    },
    component: Home,
    children: [
      {
        path: " ",
        redirect: "newS"
      },
      {
        path: "newS",
        component: () => import("../components/HomeNew.vue")
      },
      {
        path: "viewS",
        component: () => import("../components/HomeView.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "about"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/news",
    name: "News",
    meta: {
      title: "news"
    },
    component: () => import("../views/news.vue")
  },
  {
    path: "/document/:param1/:param2",
    name: "Document",
    meta: {
      title: "document"
    },
    component: Document
  },
  {
    path: "/user/:userId",
    name: "User",
    meta: {
      title: "user"
    },
    component: () => import("../views/User.vue")
  }
];

const router = new VueRouter({
  mode: "history", //顺序也有影响
  routes
});
//全局导航守卫  前置守卫
router.beforeEach((to, from, next) => {
  //从from跳到to
  console.log("***:" + JSON.stringify(to));
  document.title = to.matched[0].meta.title;
  next();
});
//后置回调
export default router;
