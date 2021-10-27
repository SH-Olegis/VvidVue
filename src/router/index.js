import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "../i18n";
function load(component) {
  // '@' is aliased to src/components
  return () => import(`../views/${component}.vue`);
}

const routes = [
  {
    path: "/:locale",
    component: {
      template: "<router-view></router-view>",
    },
    beforeEnter: (to, from, next) => {
      // <------------
      const locale = to.params.locale; // 1
      const supported_locales =
        process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","); // 2
      if (!supported_locales.includes(locale)) return next("en"); // 3
      if (i18n.locale !== locale) {
        // 4
        i18n.locale = locale;
      }
      return next(); // 5
    },
    children: [
      {
        path: "",
        name: "Home",
        component: load("Home"),
      },
      {
        path: "account",
        name: "Account",
        component: load("Account"),
      },
      {
        path: "contacts",
        name: "Contacts",
        component: load("Contacts"),
      },
      {
        path: "registration",
        name: "Registration",
        component: load("Registration"),
      },
      {
        path: "program",
        name: "Program",
        component: load("Program"),
      },
      {
        path: "culture",
        name: "Culture",
        component: load("Culture"),
      },
      {
        path: "capital",
        name: "Capital",
        component: load("Capital"),
      },
    ],
  },
  {
    path: "*",
    redirect() {
      return process.env.VUE_APP_I18N_LOCALE;
    },
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
