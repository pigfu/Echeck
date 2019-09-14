<template>
    <div style="width:99%;margin-left:auto;margin-right:auto;">
        <p>组织架构</p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login: function(){
                //发送get请求
                this.axios.get('users',{
                    params: {
                        username: this.username,
                        password: this.password
                    }
                })
                    .then((res) => {
                        if(res.data.code != 1){
                            this.$Notice.error({
                                title: res.data.msg
                            });
                        }else{
                            window.location.href='#/main';
                        }
                    })
                    .catch((err) => {
                        this.$Notice.error({
                            title: err
                        });
                    });
            }
        }
    }
</script>