<template>
<div class="container">
    <h1>{{title}}</h1>
    <p class="content">
        {{content}}
    </p>
</div>
</template>

<script>
export default {
    name: "MyArticle",
    data() {
        return {
            title: "标题",
        }
    },
    props: {
        content: {
            type: String,
            default: "内容"
        }
    }
}
</script>

<style>
.container {
    box-shadow: 0 0 6px 0 #ccc;
}
.container h1 {
    padding: 10px 0;
    color: #000;
    font-size: 20px;
}

.container p.content {
    font-size: 14px;
    text-indent: 2em;
    margin-top: 10px;
    padding: 10px 0;
}
</style>
