<template>
    <div class="header">
        <div id=”mainMenu”>
            <ul>
                <li><a href=”#” >首页</a></li>
                <li><a href=”#” >介绍</a></li>
                <li><a href=”#” >服务</a></li>
            </ul>
        </div>
        <label>{{msg}}</label>
    </div>
</template>

<script>
    export default {
        name: 'header',
        data () {
            return {
                msg: 'HELLO WORLD！'
            }
        }
    }
</script>
<style>
    .header{
        margin-top: 25px;
        background-color: gray;
        height: 125px;
    }
    #mainMenu {
        width:100%;
        height:30px;
        /*background:url(images/mainMenu_bg.jpg) repeat-x;*/
    }
    #mainMenu ul li {
        float:left;
        line-height:30px;
        margin-right:1px;
        cursor:pointer;
    }
</style>
