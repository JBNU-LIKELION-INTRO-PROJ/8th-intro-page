// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueScrollTo from "vue-scrollto";
import VueFuse from "vue-fuse";

export default function(Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component

  Vue.use(VueScrollTo, {
    duration: 1000,
    easing: "ease"
  });

  Vue.use(VueFuse);
  head.link.push({
    rel: "canonical",
    href: "https://jbnu-likelion.web.app"
  });

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

  head.meta.push({
    name: "google-site-verification",
    content: "X5RsihjawhE3piWxawDbrQMxwdWmer8Mv6TUM0Mpujg"
  });

  head.meta.push({
    name: "naver-site-verification",
    content: "8db23393c00aefcded94f4feb618fe44b985fda6"
  });

  head.meta.push({
    property: "og:type",
    content: "website"
  });
  head.meta.push({
    property: "og:title",
    content: "전북대 멋쟁이 사자처럼 홈페이지"
  });

  head.meta.push({
    property: "og:description",
    content: "전북대 멋쟁이 사자처럼 소개 페이지입니다!"
  });

  head.meta.push({
    property: "og:url",
    content: "https://jbnu-likelion.web.app"
  });

  head.meta.push({
    property: "og:image",
    content: "https://jbnu-likelion.web.app/og.png"
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,400,700&display=swap&subset=korean"
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://unpkg.com/swiper/css/swiper.min.css"
  });

  // Firebase
  head.script.push({
    src: "/__/firebase/7.9.1/firebase-app.js",
    body: true
  });

  head.script.push({
    src: "/__/firebase/7.9.1/firebase-analytics.js",
    body: true
  });

  head.script.push({
    src: "/__/firebase/init.js",
    body: true
  });

  Vue.component("Layout", DefaultLayout);
}
