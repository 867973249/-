import MyArticle from "./my_article.vue";

export default {
    install(Vue, options) {
        Vue.component(MyArticle.name, MyArticle) // MyArticle组件的name属性
    },
    MyArticle
}



/*
    MyArticle.install = function (Vue, options) {
        Vue.component(MyArticle.name, MyArticle) // MyArticle组件的name属性
    }
    export default MyArticle;
*/