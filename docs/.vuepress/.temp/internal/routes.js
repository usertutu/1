export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/ADMIN/Desktop/123/1/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/home.html", { loader: () => import(/* webpackChunkName: "home.html" */"C:/Users/ADMIN/Desktop/123/1/docs/.vuepress/.temp/pages/home.html.js"), meta: {"title":"Home"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/ADMIN/Desktop/123/1/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/ADMIN/Desktop/123/1/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
