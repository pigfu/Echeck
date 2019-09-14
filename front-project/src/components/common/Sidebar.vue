<template>
    <div class="sidebar">
        <h1>{{ msg }}</h1>
        <label>账号：</label>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data () {
            return {
                msg: 'HELLO WORLD！'
            }
        }
    }
</script>
<style>
    .sidebar{
        margin-top: 25px;
        background-color: gray;
        height: 125px;
    }
</style>