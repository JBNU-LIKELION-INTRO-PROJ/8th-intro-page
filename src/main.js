// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueScrollTo from "vue-scrollto";
import VueFuse from "vue-fuse";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(VueScrollTo, {
    duration: 1000,
    easing: "ease"
  });

  Vue.use(VueFuse);

  head.meta.push({
    name: "keywords",
    content:
      "Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS"
  });

  head.meta.push({
    name: "description",
    content: "JBNU Like Lion 8th Intro Page"
  });

  head.meta.push({
    name: "author",
    content: "Like Lion 8th Managers"
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean"
  });
}